const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const dbUsers = require('database/models/users');
const { privateKey } = require('keys/keys');

const saltRounds = 10;

const dbRetrieve = email =>
  dbUsers.findOne({
    where: {
      email
    }
  });

const dbNewUser = async ({ email, name, password }) => {
  const hashedPassword = await bcrypt.hash(password, saltRounds);
  await dbUsers.create({
    email,
    name,
    password: hashedPassword
  });
};

const comparePwd = (hashedPassword, inputPassword) => bcrypt.compare(inputPassword, hashedPassword);

const genToken = payload =>
  jwt.sign(payload, privateKey, { algorithm: 'RS256', expiresIn: '15min' });

module.exports = {
  dbRetrieve,
  dbNewUser,
  comparePwd,
  genToken
};
