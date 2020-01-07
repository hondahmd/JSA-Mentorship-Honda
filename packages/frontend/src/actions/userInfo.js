const signUp = userInfo => ({
  type: 'SIGN_UP',
  payload: {
    userInfo
  }
});

const signIn = (userInfo, token) => ({
  type: 'SIGN_IN',
  payload: {
    userInfo,
    token
  }
});

export default {
  signUp,
  signIn
};
