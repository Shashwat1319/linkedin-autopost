The5 array methods I use daily (and when NOT to use them):

map → transform every item (keep the same length)
filter → keep the matches (shorter array)
reduce → one value out (sum, group, max) — BUT if it needs a comment, use a loop
find → first match or undefined
some/every → answers to yes/no questions

The trap I see in review:
arr.map(x => { if (x.ok) results.push(x) })  ← using map as forEach. NO.

map = "make me a new array of the same size."
If your callback doesn't RETURN something for each element — it's forEach.

Read the method name. It means what it says.

Which array method do you overuse? (Mine: reduce, everywhere. I'm working on it.)

#JavaScript #ArrayMethods #CleanCode #WebDevelopment
