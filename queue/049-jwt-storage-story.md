JWT storage debate — the story of a bug I fixed:

App stored JWT in localStorage. "Works great!"
Then: one XSS vector = token gone. Attacker = logged in as you.

Options I now explain to students:
→ localStorage: easy, vulnerable to any script on page
→ httpOnly cookie: XSS can't read it; needs CSRF protection
→ Memory + refresh rotation: best security, more moving parts

There's no free lunch — each tradeoff is real.

My default for most apps:
→ Short-lived access token in memory
→ httpOnly, Secure, SameSite refresh cookie
→ Rotate on every refresh

Security decisions are tradeoff documents, not moral choices.

Where do YOU store tokens, and what made you pick that?

#JWT #WebSecurity #Authentication #NodeJS
