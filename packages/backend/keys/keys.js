const fs = require('fs');

const publicKey = fs.readFileSync('./keys/public.key');
const privateKey = fs.readFileSync('./keys/private.key');

module.exports = {
  privateKey,
  publicKey
};
