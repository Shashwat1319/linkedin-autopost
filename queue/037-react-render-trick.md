React mystery I chased for an hour:

Parent re-renders → child re-renders → console.log fires3× for ONE click.

Nothing was "wrong." That's just React re-rendering the tree.

Fixes I now choose deliberately:
→ useMemo/useCallback where it MATTERS (not everywhere — measured first)
→ Context split so a toast update doesn't re-render the whole page
→ State moved DOWN to the component that actually uses it

Premature memoization is also a bug. It hides the real question: what actually re-renders, and who cares?

Profile your React app before you optimize it.

What's the most confusing React bug you've debugged?

#React #FrontendPerformance #JavaScript #WebDevelopment
