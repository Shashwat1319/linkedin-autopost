The callback pyramid I inherited — and the async rewrite:

Old:
getUser(id, (err, user) => {
  getOrders(user.id, (err, orders) => {
    getInvoice(orders[0].id, (err, inv) => {
      send(inv)
    })
  })
})

New:
const user = await getUser(id)
const [orders] = await getOrders(user.id)
const inv = await getInvoice(orders[0].id)
send(inv)

Same logic. 60% fewer lines. Errors handled in ONE place.

The deeper lesson: nested callbacks aren't just ugly — error handling multiplies with depth. async/await makes the failure path visible.

Caveat I teach: sequential awaits when each step NEEDS the previous.
Parallel when they don't: Promise.all([a(), b()]) — don't make users wait for what could run together.

What's the deepest nesting you've survived reading?

#JavaScript #AsyncAwait #CleanCode #CodeRefactoring
