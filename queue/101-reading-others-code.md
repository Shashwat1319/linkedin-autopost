My method for reading a codebase I've never seen:

1. README + package.json — what it CLAIMS to do
2. Folder structure — where things live (routes? pages? lib?)
3. ONE entry point (server.js / main.ts) — trace it top to bottom
4. Pick a feature a user touches — follow THAT path, not "the architecture"
5. Last10 commits — what's changing right now = what matters

I read FEWER files but ask more questions:
→ Where does auth happen? (find it once)
→ Where's the DB access layer?
→ What's the error handling pattern?

Trying to understand everything = understanding nothing.
Understanding one path end to end = you can navigate the rest.

How do YOU onboard onto an unknown repo?

#CodeReading #SoftwareEngineering #DeveloperTips #Onboarding
