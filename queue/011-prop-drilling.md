React code I deleted and felt nothing about:

<TopBar theme={theme} user={user} setUser={setUser} />
  <Sidebar theme={theme} user={user} />
    <Menu theme={theme} user={user} setUser={setUser} />
      <Item theme={theme} user={user} />

Four levels. One prop. Zero dignity.

The day I learned Context properly, my component trees got shorter and my sanity got longer.

Now I ask one question before passing any prop:
"Who actually uses this?"

If the answer is "not the parent" → it probably belongs in context, state, or the URL.

What's the deepest prop chain you've ever seen?

#React #FrontendDevelopment #CleanCode #JavaScript
