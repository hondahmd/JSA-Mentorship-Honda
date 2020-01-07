const { dbRetrieve, dbNewUser, comparePwd } = require('./common');

const signUp = async ctx => {
  const retrieveResult = await dbRetrieve(ctx.request.body.email);
  if (retrieveResult === null) {
    ctx.response.body = 'Sign up success!';
    dbNewUser(ctx.request.body);
  } else {
    ctx.response.body = 'User already existed!';
  }
};

const signIn = async ctx => {
  const retrieveResult = await dbRetrieve(ctx.request.body.email);
  if (retrieveResult === null) {
    ctx.response.body = 'user not exists!';
    return;
  }
  const checkResult = await comparePwd(
    retrieveResult.dataValues.password,
    ctx.request.body.password
  );
  if (checkResult) {
    ctx.response.body = 'sign in success!';
  } else {
    ctx.response.body = 'password not right!';
  }
};

module.exports = {
  signUp,
  signIn
};
