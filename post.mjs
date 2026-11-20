import { readdirSync, readFileSync, writeFileSync, renameSync, existsSync, mkdirSync } from "node:fs"

/**
 * Posts the next queued markdown file to LinkedIn.
 *
 * - Runs daily via GitHub Actions cron (see .github/workflows/post.yml)
 * - Picks queue/*.md in sorted order, posts once per day, moves it to posted/
 * - state.json guards against double-posting the same day
 * - Fails loudly (non-zero exit → Action email) on token expiry
 *
 * Required env: LINKEDIN_ACCESS_TOKEN  (2-month validity — renew via
 * LinkedIn Developers → your app → Get access token)
 */

const TOKEN = process.env.LINKEDIN_ACCESS_TOKEN
if (!TOKEN) {
  console.error("❌ LINKEDIN_ACCESS_TOKEN missing — GitHub repo → Settings → Secrets and variables → Actions")
  process.exit(1)
}

const API = "https://api.linkedin.com"
const HEADERS = {
  Authorization: `Bearer ${TOKEN}`,
  "Content-Type": "application/json",
  "X-Restli-Protocol-Version": "2.0.0",
  "LinkedIn-Api-Version": "202506",
}

const today = () => new Date().toISOString().slice(0, 10)

// --- once-a-day guard -------------------------------------------------
let state = {}
try {
  state = JSON.parse(readFileSync("state.json", "utf8"))
} catch {
  /* first run */
}
if (state.lastDate === today()) {
  console.log(`Aaj ka post ho chuka hai (${state.lastPost}) — skip.`)
  process.exit(0)
}

// --- queue ------------------------------------------------------------
const queue = existsSync("queue") ? readdirSync("queue").filter((f) => f.endsWith(".md")).sort() : []
if (!queue.length) {
  console.log("Queue khali hai — aaj kuch post nahi hoga.")
  process.exit(0)
}

// --- resolve person URN (also validates the token) --------------------
const ui = await fetch(`${API}/v2/userinfo`, { headers: { Authorization: `Bearer ${TOKEN}` } })
if (!ui.ok) {
  console.error(`❌ Token invalid/expired (HTTP ${ui.status}) — LinkedIn Developers → app → Get access token se naya banao (2 min)`)
  process.exit(1)
}
const { sub, name } = await ui.json()

// --- build post -------------------------------------------------------
const file = queue[0]
const commentary = readFileSync(`queue/${file}`, "utf8").trim()
if (commentary.length > 3000) {
  console.error(`❌ ${file}: ${commentary.length} chars — LinkedIn limit 3000 hai. Short kar.`)
  process.exit(1)
}

// --- publish ----------------------------------------------------------
const res = await fetch(`${API}/rest/posts`, {
  method: "POST",
  headers: HEADERS,
  body: JSON.stringify({
    author: `urn:li:person:${sub}`,
    commentary,
    visibility: "PUBLIC",
    distribution: {
      feedDistribution: "MAIN_FEED",
      targetEntities: [],
      thirdPartyDistributionChannels: [],
    },
    lifecycleState: "PUBLISHED",
    isReshareDisabledByAuthor: false,
  }),
})

const body = await res.text()
if (!res.ok) {
  console.error(`❌ LinkedIn post failed (HTTP ${res.status})\n${body.slice(0, 600)}`)
  if (res.status === 403) {
    console.error("→ App ko post permission nahi mil raha. Check: token w_member_social scope ke saath bana tha na?")
  }
  process.exit(1)
}

// --- archive + state --------------------------------------------------
mkdirSync("posted", { recursive: true })
renameSync(`queue/${file}`, `posted/${today()}-${file}`)
writeFileSync("state.json", JSON.stringify({ lastDate: today(), lastPost: file }, null, 2))
console.log(`✅ Posted as ${name}: ${file} (${commentary.length} chars)`)
