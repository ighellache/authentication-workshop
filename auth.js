// quick way to create a hash using node:
const crypto = require("node:crypto");
const password = "hunter2";

// Hash string with the SHA256 algorithm and output in hexadecimal format
const hashed = crypto.createHash("sha256").update(password).digest("hex");
// "f52fbd32b2b3b86ff88ef6c490628285f482af15ddcb29541f94bcf526a3f6c7"

console.log(hashed)

// using BCrypt to hash passwords
const bcrypt = require("bcryptjs")
const password2 = "hunter2";

bcrypt.hash(password2, 12).then((hash) => console.log(hash));
// $2a$10$n1etzOWCrAtJGQIDoaw0mun1ojnIjA2UaiJ8DkL76ljhGa/cZCQtq
