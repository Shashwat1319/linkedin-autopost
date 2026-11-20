Performance audit I did on my portfolio — the actual findings:

Before:
→ Hero image:1.2MB PNG (a JPEG could be 80KB)
→ Fonts: 4 weights of the same family
→ Third-party script:200ms of blocking time
→ No loading states — layout jumped while images fetched

After:
→ WebP + lazy loading + explicit width/height (zero CLS)
→ 2 weights, font-display: swap
→ Analytics loaded after interaction
→ Skeleton loaders on every async section

Result: mobile Lighthouse in the90s, and — more important — it FEELS fast on a3-year-old phone.

Rule: optimize what USERS feel (first paint, layout shift), not what looks good in a tweet.

What's the biggest byte-waster on YOUR site right now?

#WebPerformance #Lighthouse #FrontendDevelopment #Portfolio
