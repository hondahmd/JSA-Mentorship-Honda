const bcrypt = require('bcrypt');

const dbUsers = require('database/models/users');

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

module.exports = {
  dbRetrieve,
  dbNewUser,
  comparePwd
};
