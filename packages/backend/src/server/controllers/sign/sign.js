const { dbRetrieve, dbNewUser, comparePwd, genToken } = require('./common');

const signUp = async ctx => {
  const retrieveResult = await dbRetrieve(ctx.request.body.email);
  if (retrieveResult === null) {
    ctx.response.body = JSON.stringify('Sign up success!');
    dbNewUser(ctx.request.body);
  } else {
    ctx.response.body = JSON.stringify('User already existed!');
  }
};

const signIn = async ctx => {
  const retrieveResult = await dbRetrieve(ctx.request.query.email);
  if (retrieveResult === null) {
    ctx.response.body = JSON.stringify('user not exists!');
    return;
  }
  const checkResult = await comparePwd(
    retrieveResult.dataValues.password,
    ctx.request.query.password
  );
  if (!checkResult) {
    ctx.response.body = JSON.stringify('password not right!');
  }
  ctx.response.body = { token: genToken(ctx.request.query) };
};

module.exports = {
  signUp,
  signIn
};
