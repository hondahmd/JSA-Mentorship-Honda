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
  email: { input: '', show: false, status: false },
  password: { input: '', show: false, status: false }
};

// reducer cases
const actionPairs = {
  TEXT_FOCUS: (state, action) => {
    const { focusId } = action.payload;
    const newState = { ...state };
    newState[focusId].show = true;
    return newState;
  },
  TEXT_INPUT: (state, action) => {
    const { changeId, input } = action.payload;
    const pairs = {
      email: { ...state, email: { ...state.email, input, status: fieldsCheck.email(input) } },
      password: {
        ...state,
        password: { ...state.password, input, status: fieldsCheck.basic(input) }
      }
    };
    return pairs[changeId];
  }
};
export const reducer = (state, action) => {
  if (action.type in actionPairs) return actionPairs[action.type](state, action);
  return state;
};
