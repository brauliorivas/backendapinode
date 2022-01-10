const bcrypt = require('bcrypt');

async function verifyPassword() {
    const myPassword = 'admin123';
    const hash = '$2b$10$kBk8sgYAJW6rJ/ggAMh/L.wzjyiYp3N0muvlutsBixTUfpjI/nrxq';
    const isMatch = await bcrypt.compare(myPassword, hash);
    console.log(isMatch);
}

verifyPassword();
