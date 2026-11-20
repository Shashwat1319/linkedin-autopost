React state vs context — the question that confuses every beginner:

STATE: data that changes and belongs to a part of the tree.
CONTEXT: data that almost EVERY component reads.

Examples:
→ A form's input value → state (one component cares)
→ Theme, current user, locale → context (everyone cares)

The trap: putting EVERYTHING in context.
Then one keystroke re-renders your entire app, and you blame React.

My decision tree:
1. Only this component? → useState/useReducer
2. Parent + children? → props (yes, still)
3. Distant relatives reading the same value? → Context
4. Server data? → A data library (React Query / SWR), not context

Context is a sledgehole. Most bugs want a screwdriver.

Where does YOUR app's state live — too little, or too much?

#React #StateManagement #FrontendDevelopment #JavaScript
