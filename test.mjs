/**
 * Token + permission test. Run locally BEFORE enabling the workflow.
 *
 *   $env:LINKEDIN_ACCESS_TOKEN="..."; node test.mjs           → dry run (no post)
 *   $env:LINKEDIN_ACCESS_TOKEN="..."; node test.mjs --post    → posts ONE test post
 *
 * --post wala test LinkedIn profile pe dikhega — verify karke delete kar dena.
 */

const TOKEN = process.env.LINKEDIN_ACCESS_TOKEN
if (!TOKEN) {
  console.error("❌ LINKEDIN_ACCESS_TOKEN env var set karo pehle")
  process.exit(1)
}

// 1. token valid?
const ui = await fetch("https://api.linkedin.com/v2/userinfo", {
  headers: { Authorization: `Bearer ${TOKEN}` },
})
if (!ui.ok) {
  console.error(`❌ Token invalid/expired (HTTP ${ui.status})`)
  process.exit(1)
}
const { sub, name } = await ui.json()
console.log(`✅ Token valid — ${name} (urn:li:person:${sub})`)

if (!process.argv.includes("--post")) {
  console.log("Dry run OK. Actual test ke liye: node test.mjs --post")
  process.exit(0)
}

// 2. real post test (delete after verifying)
const res = await fetch("https://api.linkedin.com/rest/posts", {
  method: "POST",
  headers: {
    Authorization: `Bearer ${TOKEN}`,
    "Content-Type": "application/json",
    "X-Restli-Protocol-Version": "2.0.0",
    "LinkedIn-Api-Version": "202506",
  },
  body: JSON.stringify({
    author: `urn:li:person:${sub}`,
    commentary: "Automation test — post pipeline verification. Please ignore (deleting shortly).",
    visibility: "PUBLIC",
    distribution: { feedDistribution: "MAIN_FEED", targetEntities: [], thirdPartyDistributionChannels: [] },
    lifecycleState: "PUBLISHED",
    isReshareDisabledByAuthor: false,
  }),
})
const body = await res.text()
if (!res.ok) {
  console.error(`❌ Post permission nahi mila (HTTP ${res.status})\n${body.slice(0, 500)}`)
  process.exit(1)
}
console.log("✅ End-to-end post OK — profile pe check karke wo test post delete kar dena.")
