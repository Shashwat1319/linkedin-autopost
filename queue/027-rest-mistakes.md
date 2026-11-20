REST mistakes I made so you don't have to:

1. GET /deleteUser?id=5
   GET should never change anything. Ever.

2. /api/getAllProducts/getProductById/7
   Nouns, not verbs. /api/products/7

3. 200 OK with body { error: "not found" }
   That's a 404. Status codes are free. Use them.

4. No pagination
   One day your list has 10,000 rows and your frontend dies.

5. Returning passwords, tokens, or internal IDs "just in case"
   Shape your response. Always.

APIs are contracts. Your future frontend — and other humans — depend on them.

What's an API design rule you wish someone told you earlier?

#REST #API #WebDevelopment #BackendDevelopment
