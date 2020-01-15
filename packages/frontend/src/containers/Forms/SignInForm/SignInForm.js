import React, { useReducer } from 'react';
import { Button, CircularProgress } from '@material-ui/core';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import InputBlock from 'components/MainPage/SignForm/InputBlock/InputBlock';
import SplitLine from 'components/MainPage/SignForm/SplitLine/SplitLine';
import JumpButton from 'components/MainPage/SignForm/JumpButton/JumpButton';
import thunks from 'thunks/userInfo';
import fieldsCheck from 'constants/fieldsCheck';
import reducer from './reducer';
import fields from './staticData';

import Container from './styles';

const SignInForm = ({ history, signIn }) => {
  const initState = {
    fields: {
      email: { input: '', show: false, status: false },
      password: { input: '', show: false, status: false }
    },
    fetchStatus: 0
  };
  const [state, dispatch] = useReducer(reducer, initState);

  async function handleClick() {
    dispatch({ type: 'START_FETCHING' });
    await signIn({
      email: state.fields.email.input,
      password: state.fields.password.input
    });
    setTimeout(() => {
      dispatch({ type: 'SIGNIN_SUCCESS' });
      setTimeout(() => {
        dispatch({ type: 'CLEAR_STATE' });
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
    <Container>
      {fields.map(field => (
        <InputBlock key={field.id} attrs={field} state={state.fields} dispatch={dispatch} />
      ))}
      <Button
        variant="contained"
        className={`signInButton ${state.fetchStatus === 2 ? 'successButton' : ''}`}
        disabled={!fieldsCheck.checkReady(state.fields)}
        onClick={() => handleClick()}
      >
        {buttonContent()}
      </Button>
      <SplitLine />
      <JumpButton path="/signup" content="Sign Up" />
    </Container>
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
