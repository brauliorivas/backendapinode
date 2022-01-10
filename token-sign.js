const jwt = require('jsonwebtoken');

const secret = 'myCat';
// deberia ser una variable de entorno en backend
const payload = {
    sub: 1,
    role: 'customer',//permisos
}

function signToken(payload, secret) {
    return jwt.sign(payload, secret);
}

const token = signToken(payload, secret);
console.log(token);
