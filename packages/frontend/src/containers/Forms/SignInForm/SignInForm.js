import React, { useReducer } from 'react';
import { Button, CircularProgress } from '@material-ui/core';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import InputBlock from 'components/MainPage/SignForm/InputBlock/InputBlock';
import SplitLine from 'components/MainPage/SignForm/SplitLine/SplitLine';
import JumpButton from 'components/MainPage/SignForm/JumpButton/JumpButton';
import thunks from 'thunks/userInfo';
import { SignInFormDispatch, reducer, initState, fields } from './dataCarrier';

import Container from './styles';

const SignInForm = ({ history, signIn }) => {
  const [state, dispatch] = useReducer(reducer, initState);

  async function handleClick() {
    dispatch({ type: 'START_FETCHING' });
    await signIn({
      email: state.fields.email.input,
      password: state.fields.password.input
    });
    setTimeout(() => {
      dispatch({ type: 'FINISH_FETCHING' });
      setTimeout(() => {
        history.push('/dashboard');
      }, 1000);
    }, 1000);
  }

  function buttonContent() {
    const pairs = {
      0: 'Sign In',
      1: <CircularProgress size={24} className="circle" />,
      2: 'Success'
    };
    return pairs[state.fetchStatus];
  }

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
              content={state.fields[id].status ? alerts.correct : alerts.error}
              show={state.fields[id].show}
              status={state.fields[id].status}
            />
          );
        })}
        <Button
          variant="contained"
          className="signInButton"
          disabled={!state.isReady}
          onClick={() => handleClick()}
        >
          {buttonContent()}
        </Button>
        <SplitLine />
        <JumpButton path="/signup" content="Sign Up" />
      </Container>
    </SignInFormDispatch.Provider>
  );
};

SignInForm.defaultProps = {
  signIn: null,
  history: {}
};

SignInForm.propTypes = {
  signIn: PropTypes.func,
  history: PropTypes.shape({
    push: PropTypes.func
  })
};

const mapDispatchToProps = dispatch => ({
  signIn: userInfo => dispatch(thunks.signIn(userInfo))
});

export default connect(null, mapDispatchToProps)(withRouter(SignInForm));
