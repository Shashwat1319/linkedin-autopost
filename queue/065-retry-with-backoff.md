The API call that fails sometimes — how I stop pretending it won't:

First version:
const res = await fetch(url)  // fails once = user sees error

Now: retry with exponential backoff.

attempt 1 → wait 1s
attempt 2 → wait 2s
attempt 3 → wait 4s
then: real error message with a retry button

Rules:
→ Retry TRANSIENT failures only (network, 5xx, 429) — NOT400s
→ Cap attempts (3 is plenty)
→ Idempotent operations only (a GET yes; a "charge payment" — careful)

The internet is unreliable. Your app pretending otherwise is the bug.

Plus: timeouts. A fetch without a timeout isn't a request — it's a hope.

How do YOU handle flaky third-party APIs?

#Resilience #API #NodeJS #SoftwareEngineering
