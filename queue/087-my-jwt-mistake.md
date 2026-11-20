The JWT mistake I made (so you can spot it in YOUR code):

I put the user's role INSIDE the token payload.
"Efficient — no DB call per request!"

Then: user's role changed server-side.
Token still valid for24 hours.
Old permissions, new world. The user kept admin access after being demoted.

The fix:
→ Tokens carry identity (who), permissions come from a live source (what now)
→ Short access-token expiry (minutes, not days)
→ Refresh flow re-checks the DB on rotation

JWTs are SIGNED, not ENCRYPTED — and they're snapshots, not truth.

There's no perfect auth. There's only: what breaks when data changes?

Where does YOUR app get roles from — token or database?

#JWT #Authentication #WebSecurity #NodeJS
