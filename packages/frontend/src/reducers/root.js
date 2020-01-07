import { combineReducers } from 'redux';

import userInfo from './userInfo';

function setReducer(state, action, pairs) {
  if (action.type in pairs) return pairs[action.type](state, action);
  return state;
}

export default combineReducers({
  userInfo: (state = {}, action) => setReducer(state, action, userInfo)
});
