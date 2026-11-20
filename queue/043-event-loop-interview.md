Event loop interview question I got (and how I answered):

"console.log(1); setTimeout(() => console.log(2), 0); console.log(3)"

Answer: 1, 3, 2.

Why: setTimeout queues a MACROTASK even with 0ms.
Sync code runs first. Then the queue drains.

Follow-up they asked: "Same with Promise.resolve().then()?"
Answer: 1, 3, 2 — microtask runs before the next macrotask.

My trick for remembering:
→ Call stack (now)
→ Microtasks (promises — very soon)
→ Macrotasks (timers — soon after)

Draw it once on paper. You'll never mix them up again.

Got a nastier event loop question? Drop it — let's see who survives.

#JavaScript #EventLoop #InterviewPrep #CodingInterview
