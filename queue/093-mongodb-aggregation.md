The MongoDB query that replaced60 lines of JS:

Task: monthly revenue per product, top5, sorted.

My old way: find() everything → process in Node → sort in JS.
Memory spike. Slow. Embarrassing.

Aggregation pipeline doing it in the DB:
→ $match: date range
→ $group: sum by product + month
→ $sort: revenue desc
→ $limit: 5

One round trip. Database does what databases are built for.

Lesson: moving computation to the data is often the optimization.
Shipping 10k documents over the network to sum them = paying for shipping to do math locally.

Pipeline thinking transfers to SQL too (GROUP BY, HAVING).

What's YOUR favorite database-side trick?

#MongoDB #Aggregation #DatabasePerformance #BackendDevelopment
