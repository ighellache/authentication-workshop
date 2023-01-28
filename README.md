Learn how to safely store passwords, and identify returning users with cookies and sessions

Focus on necessary concepts to get a simple signup/login system working. 

So skipping over 'glue code' (e.g. the actual server, HTML forms etc)

# Hashing passwords
- hashing is when you use a mathematical proceess/algorithm to convert string to a diff one. Hashes are:
    - one-way: impossible to reverse the process
    - deterministic: hashing the same string always gives the same result
    - unique: hashing a diff string should never create the same result

1. Ask user for a password on account creation
2. Hash the password, then store the hash in database
3. (later) Ask user for a password again on login
4. Hash the provided password
5. Read the hash from the DB and check they are the same

But this isn't the best way, as hackers can find a way to hack these passwords using a 'rainbow table' of pre-computed hashes to match them. So we add salts.

# Salting password hashes
1. Ask user for a password on account creation
2. Generate a random salt
3. Hash the password + salt, then store the hash and salt in database
4. (later) Ask user for a password again on login
5. Read the hash and salt from the DB
6. Hash the provided password + stored salt
7. Check the hashes are the same

Salt is just a random string you add to the password to ensure the result is alwyas different, so hackers can't use a 'rainbow table' that contains computer generated hashes to match what users actually enter to hack their password. Hacker can no longer access passwords because they now also need to know the salt in advance. 

So you can use bcryptjs npm package to hash a password with salt and comparing a password to a hash