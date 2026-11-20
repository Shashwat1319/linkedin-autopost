Bug report of the day:

"Dashboard shows undefined, undefined, undefined."

Cause: API returned { data: { items: [...] } } — frontend read res.items.
Nothing crashed. It just... quietly showed undefined.

The fix wasn't one line — it was three habits:
→ Optional chaining: res?.data?.items ?? []
→ Validate at the BOUNDARY (first place data enters your app)
→ TypeScript interfaces for every API response (compile-time catch)

JavaScript will happily render "undefined" forever.
That's flexibility AND that's the trap.

My boundary rule: never let raw API data touch a component directly.

Where do YOU parse API responses — scattered or centralized?

#JavaScript #React #ErrorHandling #Debugging
