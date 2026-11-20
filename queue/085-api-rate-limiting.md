Rate limiting: the feature you add AFTER the wrong person teaches you why you need it.

My API got hit with40 requests/second from one script.
DB load: spiking. Everyone else: slow.

Fix in an evening:
→ Token bucket per IP/user (sliding window is fine too)
→ 429 + Retry-After header (clients can be polite if told how)
→ Stricter limits on the EXPENSIVE endpoints (search, generate)
→ Separate limits for authenticated vs anonymous

Rule of thumb: if it costs you money or CPU, it gets a limit.

And the honest part: I didn't add it "for security."
I added it because my own demo day taught me.

What's your approach — per-user, per-IP, or both?

#RateLimiting #API #BackendDevelopment #WebSecurity
