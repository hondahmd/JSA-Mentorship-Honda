import { createContext } from 'react';

import fieldsCheck from 'constants/fieldsCheck';

// context
export const SignUpFormStore = createContext(null);

export const fields = [
  {
    id: 'firstName',
    label: 'First Name',
    type: 'text',
    alerts: { correct: 'Correct', error: 'Invalid input' }
  },
  {
    id: 'lastName',
    label: 'Last Name',
    type: 'text',
    alerts: { correct: 'Correct', error: 'Invalid input' }
  },
  {
    id: 'password',
    label: 'Password',
    type: 'password',
    alerts: { correct: 'Correct', error: 'Password should not be empty' }
  },
  {
    id: 'confirmPassword',
    label: 'Confirm Password',
    type: 'password',
    alerts: { correct: 'Correct', error: 'Not match' }
  },
  {
    id: 'email',
    label: 'Email',
    type: 'email',
    alerts: { correct: 'Correct', error: 'Invalid email' }
  }
];

// initialize state
export const initState = {
  fields: {
    firstName: { input: '', show: false, status: false },
    lastName: { input: '', show: false, status: false },
    password: { input: '', show: false, status: false },
    confirmPassword: { input: '', show: false, status: false },
    email: { input: '', show: false, status: false }
  },
  isReady: false,
  signUpStatus: 0
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
    const checkPairs = {
      firstName: fieldsCheck.name,
      lastName: fieldsCheck.name,
      password: fieldsCheck.basic,
      confirmPassword: confirm => confirm === newState.fields.password.input,
      email: fieldsCheck.email
    };
    newState.fields[changeId].input = input;
    newState.fields[changeId].status = checkPairs[changeId](input);
    newState.isReady = fieldsCheck.checkReady(newState.fields);
    return newState;
  },
  SIGNUP_INIT: state => ({ ...state, signUpStatus: 0 }),
  START_FETCHING: state => ({ ...state, signUpStatus: 1 }),
  SIGNUP_SUCCESS: state => ({ ...state, signUpStatus: 2 })
};
export const reducer = (state, action) => {
  if (action.type in actionPairs) return actionPairs[action.type](state, action);
  return state;
};
