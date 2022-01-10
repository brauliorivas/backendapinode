const jwt = require('jsonwebtoken');

const secret = 'myCat';
const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjEsInJvbGUiOiJjdXN0b21lciIsImlhdCI6MTY0MTUzMzIwNH0.ILXbBQp5KHxcRFryJmLmGiTNbubIKaIGgacIgTkwh08';

// deberia ser una variable de entorno en backend
// no enviar info sensible en el token, porque puede ser facilmente visto
// no se puede modificar, eso es imposible sin el secret

function verifyToken(token, secret) {
    return jwt.verify(token, secret);
}

const payload = verifyToken(token, secret);
console.log(payload);
