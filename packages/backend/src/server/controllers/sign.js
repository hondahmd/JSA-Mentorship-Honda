const dbUsers = require('database/models/users');

const signUp = async ctx => {
  const dbRetrieve = await dbUsers.findAll({
    where: {
      email: ctx.request.body.email
    }
  });
  console.log(dbRetrieve);
  ctx.response.body = 'Success!';
};

module.exports = {
  signUp
};
