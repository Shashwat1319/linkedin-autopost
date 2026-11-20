The one-line fix that saved a demo:

Client's dashboard: numbers wrong for "this month."

Everyone blamed the API.
Actual cause: timezone. Server in UTC, client in IST. "Today" was yesterday.

Fix:
→ Store UTC. Format at the edge where the user lives.
→ One line of config. Zero new libraries.

Lesson: before optimizing, VERIFY you're computing the right thing.

Wrong-but-fast is still wrong. I keep a list of "silent bugs":
→ Timezones
→ Currency rounding
→ Off-by-one on pagination
→ Copy-paste filters that look identical

Which silent bug class catches YOU the most?

#Debugging #SoftwareEngineering #Timezone #BackendDevelopment
