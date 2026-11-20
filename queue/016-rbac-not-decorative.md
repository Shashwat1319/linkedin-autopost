RBAC is not a feature you add at the end.

A client project I worked on had this "security":
→ API checked if the user was logged in ✓
→ API did NOT check WHICH user was calling

Any logged-in user could read any other user's data by changing an ID in the URL.

The fix:
→ Roles defined server-side: admin, manager, user
→ Every route declares its required role
→ Middleware enforces it. No exceptions. No "we'll add it later".

Authentication proves WHO you are.
Authorization decides WHAT you can do.

If your app has one role — you still need RBAC. Because tomorrow it won't have one.

How do you handle permissions — custom middleware or a library?

#RBAC #WebSecurity #NodeJS #BackendDevelopment
