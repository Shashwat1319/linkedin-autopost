SQL injection in2026 — still happening. Here's the conversation I had with a student:

Student: "I just put the username straight into the query string. Works fine."

Works fine until someone types: ' OR '1'='1

The fix is old news:
→ Parameterized queries — ALWAYS (every driver supports it)
→ ORM query builders handle it — but raw queries are YOUR responsibility
→ Least-privilege DB user (the app shouldn't own the database)
→ Never trust input — validate on the server, even if the frontend already did

"String concatenation into SQL" should be a code review rejection.

Your inputs are hostile until proven otherwise. Not because users are evil — because URLs get shared.

Do you use raw queries or an ORM day to day?

#WebSecurity #SQL #BackendDevelopment #CodingInterview
