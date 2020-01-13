import React, { useReducer } from 'react';

import InputBlock from 'components/MainPage/SignForm/InputBlock/InputBlock';
import { SignInFormDispatch, reducer, initState, fields } from './dataCarrier';

import Container from './styles';

const SignInForm = () => {
  const [state, dispatch] = useReducer(reducer, initState);

  return (
    <SignInFormDispatch.Provider value={dispatch}>
      <Container>
        {fields.map(field => {
          const { id, label, type, alerts } = field;
          return (
            <InputBlock
              key={id}
              id={id}
              label={label}
              type={type}
              content={state[id].status ? alerts.correct : alerts.error}
              show={state[id].show}
              status={state[id].status}
            />
          );
        })}
      </Container>
    </SignInFormDispatch.Provider>
  );
};

export default SignInForm;
