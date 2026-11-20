MongoDB lesson that cost me a production page load:

A query worked in 40ms locally.
Same query in prod: 2.8 seconds.

Why? A 100k-document collection. No index on the field I was filtering on.

The fix was one line:
db.orders.createIndex({ userId: 1, createdAt: -1 })

The lesson was bigger:
→ "It works on my machine" includes your dataset size
→ Explain your query before optimizing your code
→ find() with no index = full collection scan every single time

Now every list screen I build ships with an index in the same PR.

Where do you stand: SQL or MongoDB for most products? Why?

#MongoDB #Database #Performance #MERN
