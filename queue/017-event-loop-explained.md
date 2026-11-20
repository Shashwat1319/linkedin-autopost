How I explain the Node.js event loop to my students:

A restaurant has ONE waiter (the thread) and MANY tables (requests).

The waiter takes order → sends it to kitchen (I/O) → instead of standing still, serves other tables → when food is ready, comes back.

That's the event loop: non-blocking, single-threaded, always moving.

The rules that matter:
→ Heavy CPU work blocks ALL other tables — keep handlers light
→ setTimeout(fn, 0) still waits for everything already queued
→ Promise callbacks run after the current sync code finishes

Interview version: "Node handles concurrency via an event-driven, non-blocking I/O model on a single thread."

But now you'll actually mean it.

How would YOU explain callbacks vs promises to a non-developer?

#NodeJS #EventLoop #JavaScript #InterviewPrep
