The day a "tiny" breaking change broke a client's app:

I renamed a field: user.name → user.fullName.
"Obvious cleanup." Their integration died instantly.

Rules I follow now:
→ Additive changes first: new fields, never remove old ones
→ If you must break: version it (/v2/), deprecate with dates, communicate
→ Deprecation ≠ deletion — months of overlap
→ Changelog humans can read (not "misc fixes")

APIs outlive the teams that build them. Whoever comes next shouldn't need your memory.

Old clients: keep working. That's the whole job.

What's the most annoying breaking change a dependency ever shipped on YOU?

#API #Versioning #SoftwareEngineering #BackendDevelopment
