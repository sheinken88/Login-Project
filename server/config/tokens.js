const jwt = require("jsonwebtoken");
const SECRET = "fideos"; // como guardo el SECRET en la DB?

// de donde viene el paylod?
function generateToken(payload) {
  const token = jwt.sign({ payload }, SECRET, {
    expiresIn: "2h", // expiración 2 horas
  });

  return token;
}

function validateToken(token) {
  return jwt.verify(token, SECRET);
}

module.exports = { generateToken, validateToken };
