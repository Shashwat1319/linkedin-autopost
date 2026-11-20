Code review jo maine apne students ke saath kiya — Hinglish me:

"Yaar ye function naam se bol raha hai 'getUser'... andar pura cart bhi fetch kar raha hai."

Naam kya karta hai, wahi karna chahiye.
→ getUser = user lao
→ getUserWithCart = dono lao
→ handleEverything = band karo, 4 functions banao

Dusri cheez:
if (user) { ... } — else ka kya? Silent fail? Log karo, error do.

Aur sabse zaroori: comment me WHY likho, WHAT nahi. WHAT code khud bol raha hai.

Mera rule: function ka naam padhke caller ko samajh aa jaye — tabhi naam sahi hai.

Aapka code review kis language me hota hai — ya kisi se karwate hi nahi?

#CodeReview #CleanCode #DeveloperLife #Hinglish
