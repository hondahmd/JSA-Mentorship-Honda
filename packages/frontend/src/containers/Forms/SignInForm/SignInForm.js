import React, { useReducer } from 'react';

import InputBlock from 'components/MainPage/SignForm/InputBlock/InputBlock';
import SignInFormDispatch from './context';

import Container from './styles';

const fields = [
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
const initState = {
  email: { input: '', show: false, status: false },
  password: { input: '', show: false, status: false }
};
const actionPairs = {
  SHOW_EMAIL_ALERT: state => ({ ...state, email: { ...state.email, show: true } }),
  SHOW_PASSWORD_ALERT: state => ({ ...state, password: { ...state.password, show: true } }),
  EMAIL_ALERT_STATUS: (state, action) => ({
    ...state,
    email: { ...state.email, status: action.payload.status }
  }),
  PASSWORD_ALERT_STATUS: (state, action) => ({
    ...state,
    password: { ...state.password, status: action.payload.status }
  })
};

const reducer = (state, action) => {
  if (action.type in actionPairs) return actionPairs[action.type](state, action);
  return state;
};

const SignInForm = () => {
  const [state, dispatch] = useReducer(reducer, initState);

  return (
    <SignInFormDispatch.Provider value={dispatch}>
      <Container>
        {fields.map(field => {
          return (
            <InputBlock
              key={field.id}
              id={field.id}
              label={field.label}
              type={field.type}
              content={state[field.id].status ? field.alerts.correct : field.alerts.error}
              show={state[field.id].show}
              status={state[field.id].status}
            />
          );
        })}
      </Container>
    </SignInFormDispatch.Provider>
  );
};

export default SignInForm;
