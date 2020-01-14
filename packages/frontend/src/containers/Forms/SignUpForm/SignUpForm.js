import React, { useReducer } from 'react';
import { Button, CircularProgress } from '@material-ui/core';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

import server from 'constants/server';
import InputBlock from 'components/MainPage/SignForm/InputBlock/InputBlock';
import SplitLine from 'components/MainPage/SignForm/SplitLine/SplitLine';
import JumpButton from 'components/MainPage/SignForm/JumpButton/JumpButton';
import actionPairs from 'containers/Forms/commonReducer';
import fieldsCheck from 'constants/fieldsCheck';
import { initState, fields } from './staticData';

import Container from './styles';

const SignUpForm = ({ history }) => {
  const signUpPairs = actionPairs({
    firstName: fieldsCheck.name,
    lastName: fieldsCheck.name,
    password: fieldsCheck.basic,
    confirmPassword: (confirm, conState) => confirm === conState.fields.password.input,
    email: fieldsCheck.email
  });
  const reducer = (state, action) => {
    if (action.type in signUpPairs) return signUpPairs[action.type](state, action);
    return state;
  };
  const [state, dispatch] = useReducer(reducer, initState);

  async function handleClick() {
    const userInfo = {
      email: state.fields.email.input,
      name: `${state.fields.firstName.input} ${state.fields.lastName.input}`,
      password: state.fields.password.input
    };
    dispatch({ type: 'START_FETCHING' });
    const response = await fetch(`http://${server.serverIp}:${server.serverPort}/sign`, {
      method: 'post',
      headers: {
        Accept: 'application/json',
        'Content-type': 'application/json'
      },
      body: JSON.stringify(userInfo)
    });
    const data = await response.json();
    if (data === 'User already existed!') {
      alert(data);
      dispatch({ type: 'SIGNUP_INIT' });
    } else if (data === 'Sign up success!') {
      dispatch({ type: 'SIGNUP_SUCCESS' });
      setTimeout(() => {
        history.push('/');
      }, 1000);
    }
  }

  function buttonContent() {
    const pairs = {
      0: 'Sign Up',
      1: <CircularProgress size={24} className="circle" />,
      2: 'Success'
    };
    return pairs[state.fetchStatus];
  }

  return (
    <Container>
      {fields.map(field => (
        <InputBlock key={field.id} attrs={field} state={state.fields} dispatch={dispatch} />
      ))}
      <Button
        variant="contained"
        className={`signUpButton ${state.fetchStatus === 2 ? 'successButton' : ''}`}
        disabled={!state.isReady}
        onClick={() => handleClick()}
      >
        {buttonContent()}
      </Button>
      <SplitLine />
      <JumpButton to="/" content="Sign In" />
    </Container>
  );
};

SignUpForm.defaultProps = {
  history: {}
};

SignUpForm.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func
  })
};

export default withRouter(SignUpForm);
