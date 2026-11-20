Why I test at night:

A student's project worked perfectly... in the computer lab.

At home on mobile data: API calls timing out.
Cause: no loading state, no timeout, no retry.
Lab had stable WiFi. The real world doesn't.

What I now test that nobody thinks about:
→ Slow network (throttle to 3G in devtools)
→ No network at all (airplane mode mid-click)
→ First visit — no cache, no localStorage
→ Second visit — stale cache fighting fresh data

Your app works in the ONE condition you tested.
Users live in the other forty.

What's a condition you've never tested your app under?

#Testing #WebDevelopment #UserExperience #FrontendDevelopment
