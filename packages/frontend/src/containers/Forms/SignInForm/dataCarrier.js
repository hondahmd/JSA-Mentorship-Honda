import { createContext } from 'react';

import fieldsCheck from 'constants/fieldsCheck';

// context
export const SignInFormDispatch = createContext(null);

// attrs for text fields
export const fields = [
  {
    id: 'email',
    label: 'Email Address',
    type: 'email',
    alerts: { error: 'Invalid email', correct: 'Correct' }
  },
  {
    id: 'password',
    label: 'Password',
    type: 'password',
    alerts: { error: 'Password should not be empty', correct: 'Correct' }
  }
];

// initialize state
export const initState = {
  fields: {
    email: { input: '', show: false, status: false },
    password: { input: '', show: false, status: false }
  },
  isReady: false,
  fetchStatus: 0
};

// reducer cases
const actionPairs = {
  TEXT_FOCUS: (state, action) => {
    const { focusId } = action.payload;
    const newState = { ...state };
    newState.fields[focusId].show = true;
    return newState;
  },
  TEXT_INPUT: (state, action) => {
    const { changeId, input } = action.payload;
    const newState = { ...state };
    const checkPairs = { email: fieldsCheck.email, password: fieldsCheck.basic };
    newState.fields[changeId].input = input;
    newState.fields[changeId].status = checkPairs[changeId](input);
    newState.isReady = fieldsCheck.checkReady(newState.fields);
    return newState;
  },
  START_FETCHING: state => ({ ...state, fetchStatus: 1 }),
  FINISH_FETCHING: state => ({ ...state, fetchStatus: 2 })
};
export const reducer = (state, action) => {
  if (action.type in actionPairs) return actionPairs[action.type](state, action);
  return state;
};
