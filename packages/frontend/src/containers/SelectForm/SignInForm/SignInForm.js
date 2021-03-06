import React, { useState } from 'react';
import { TextField, Button } from '@material-ui/core';
import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import SplitLine from 'components/MainPage/SignForm/SplitLine/SplitLine';
import thunks from 'thunks/userInfo';
import fieldsCheck from 'containers/SelectForm/fieldsCheck';

import styles from './styles';

const SignInForm = ({ signIn, history }) => {
  const initInput = {
    email: '',
    password: ''
  };
  const [state, setState] = useState({ filled: true, input: initInput });
  const [checks, setChecks] = useState({
    email: { show: false, correct: false },
    password: { show: false, correct: false }
  });

  const checkInput = () => {
    setChecks({
      email: { ...checks.email, correct: fieldsCheck.email(state.input.email) },
      password: { ...checks.password, correct: fieldsCheck.basic(state.input.password) }
    });
    return checks.email.correct && checks.password.correct;
  };

  function handleInput(event) {
    const { id, value } = event.target;
    const newState = { ...state };
    newState.input[id] = value;
    newState.filled = !checkInput();
    setState(newState);
  }

  async function handleClick() {
    signIn(state.input);
    setState({ filled: true, input: initInput });
    history.push('/dashboard');
  }

  return (
    <styles.Container>
      <div className="inputContainer">
        <TextField
          id="email"
          label="Email"
          className="TextField"
          type="email"
          value={state.input.email}
          onChange={e => handleInput(e)}
          onFocus={() => setChecks({ ...checks, email: { ...checks.email, show: true } })}
        />
        <div className="alertLine">
          <p
            hidden={!checks.email.show}
            className={`alertContent ${checks.email.correct ? 'alertCorrect' : 'alertError'}`}
          >
            {checks.email.correct ? 'Correct' : 'Invalid email address'}
          </p>
        </div>
      </div>
      <div className="inputContainer">
        <TextField
          id="password"
          label="Password"
          className="TextField"
          type="password"
          value={state.input.password}
          onChange={e => handleInput(e)}
        />
      </div>
      <div className="signInButton">
        <Button
          variant="contained"
          className="button"
          disabled={state.filled}
          onClick={() => handleClick()}
        >
          Sign In
        </Button>
      </div>
      <SplitLine />
      <div className="buttonContainer">
        <Link to="/signup">
          <Button variant="contained" className="button">
            Sign Up
          </Button>
        </Link>
      </div>
    </styles.Container>
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
