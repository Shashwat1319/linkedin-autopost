The SQL feature I wish I'd learned a year earlier:

Window functions. Not joins. Not subqueries. ROW_NUMBER() and friends.

"Give me each user's LAST order" — without a window:
messy self-joins and prayers.

With:
ROW_NUMBER() OVER (PARTITION BY user_id ORDER BY created_at DESC)

"Top3 deals per category":
RANK() OVER (PARTITION BY category ORDER clicks DESC) <= 3

"If this month > last month":
LAG(amount) OVER (ORDER BY month)

They're not "advanced." They're the difference between "I know SQL" and "I know SQL."

Where do you rank — still avoiding OVER(), or daily user?

#SQL #Database #BackendDevelopment #LearningInPublic
