const pairs = {
  SIGN_UP: state => state,
  SIGN_IN: (state, action) => ({
    userInfo: action.payload.userInfo,
    token: action.payload.token
  })
};

export default pairs;
