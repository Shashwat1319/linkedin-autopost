# LinkedIn Auto-Post 🗓️

Roz ek automated LinkedIn post — official LinkedIn API (`/rest/posts`) se, tera
own OAuth app se. Sirf **tara khud ka account**, development mode me.

## Setup (ek baar, ~10 min)

1. **LinkedIn Developers → tera app → Get access token**
   - Scopes select karo: `openid`, `profile`, `w_member_social`
   - Token copy karo (60 din valid)

2. **GitHub → is repo → Settings → Secrets and variables → Actions → New repository secret**
   - Name: `LINKEDIN_ACCESS_TOKEN`
   - Value: jo token copy kiya

3. **Test (optional):**
   ```powershell
   $env:LINKEDIN_ACCESS_TOKEN="..."; node test.mjs        # dry run
   $env:LINKEDIN_ACCESS_TOKEN="..."; node test.mjs --post  # ek test post
   ```

4. **Workflow on:** repo → Actions tab → enable workflows (first push ke baad prompt aayega)

## Roz ka flow

- `queue/` me jo sabse pehle `.md` file hai wo **roz 8:45 AM IST** post hoti hai
- Post ke baad file `posted/` me chali jaati hai + `state.json` update hota hai
- Ek din me max **1 post** (state guard) — spam risk zero
- Queue khali? Action chup-chaap skip karta hai

**Current queue: 105 posts (~3.5 mahine ka content).** Queue 10 se kam ho to
naye posts add kar dena — khali queue pe Action skip karta hai (fail nahi).

## Naya post add karna

`queue/` me nayi file daalo — naam se priority decide hoti hai (3-digit zero-pad):
```
queue/106-my-new-post.md    ← us din post hoga (106 > 105)
```
Content = post body (hashtag bhi andar). **Max 3000 chars.**

## Token expire ho jaye to?

Action fail hoke email dega. Fix: LinkedIn Developers → app → Get access token →
naya token → GitHub secret update. **Har ~60 din ye karna padega.**

## ⚠️ Rules

- Sirf **official API** (ye repo) — bot/scraping mat use karna, account ban ho sakta hai
- 1 post/day se zyada mat badhao
- App **development mode** me rahega = sirf tere account pe post hoga — kisi aur pe nahi
