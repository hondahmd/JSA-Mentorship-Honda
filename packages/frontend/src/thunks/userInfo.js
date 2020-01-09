import actions from 'actions/userInfo';
import server from 'constants/server';

const signIn = userInfo => {
  return async dispatch => {
    const response = await fetch(
      `http://${server.serverIp}:${server.serverPort}/sign?email=${userInfo.email}&password=${userInfo.password}`
    );
    const data = await response.json();
    document.cookie = `token=${data.token}`;
    dispatch(actions.signIn(userInfo, data.token));
  };
};

export default {
  signIn
};
