import React, { useState } from 'react';
import { TextField, Button, CircularProgress } from '@material-ui/core';
import { Link, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

import SplitLine from 'components/MainPage/SignForm/SplitLine/SplitLine';
import server from 'constants/server';

import styles from './styles';

const SignUpForm = ({ history }) => {
  const initInput = {
    firstName: '',
    lastName: '',
    password: '',
    confirmPassword: '',
    email: ''
  };
  const [state, setState] = useState({ process: 0, input: initInput });

  function handleInput(event) {
    const { id, value } = event.target;
    const newInput = { ...state.input };
    newInput[id] = value;
    setState({ ...state, input: newInput });
  }

  async function fetchSignUp(userInfo) {
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
      setState({ process: 0, input: initInput });
    } else if (data === 'Sign up success!') {
      setState({ process: 2, input: initInput });
    }
  }

  function handleClick() {
    setState({ ...state, process: 1 });
    const data = {
      email: state.input.email,
      name: `${state.input.firstName} ${state.input.lastName}`,
      password: state.input.password
    };
    setTimeout(() => {
      fetchSignUp(data);
    }, 1000);
  }

  function signProcess() {
    let content = 'Sign Up';
    if (state.process === 0) {
      content = 'Sign Up';
    } else if (state.process === 1) {
      content = <CircularProgress size={24} className="circle" />;
    } else if (state.process === 2) {
      content = 'Success';
      setTimeout(() => {
        history.push('/');
      }, 1000);
    }
    return content;
  }

  return (
    <styles.Container>
      <div className="inputContainer">
        <TextField
          id="firstName"
          label="First Name"
          className="TextField"
          type="text"
          value={state.input.firstName}
          onChange={e => handleInput(e)}
        />
      </div>
      <div className="inputContainer">
        <TextField
          id="lastName"
          label="Last Name"
          className="TextField"
          type="text"
          value={state.input.lastName}
          onChange={e => handleInput(e)}
        />
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
      <div className="inputContainer">
        <TextField
          id="confirmPassword"
          label="Confirm Password"
          className="TextField"
          type="password"
          value={state.input.confirmPassword}
          onChange={e => handleInput(e)}
        />
      </div>
      <div className="inputContainer">
        <TextField
          id="email"
          label="Email Address"
          className="TextField"
          type="email"
          value={state.input.email}
          onChange={e => handleInput(e)}
        />
      </div>
      <div>
        <Button
          variant="contained"
          className={`signUpButton button ${state.process === 2 ? 'successButton' : ''}`}
          onClick={() => handleClick()}
        >
          {signProcess()}
        </Button>
      </div>
      <SplitLine />
      <div>
        <Link to="/">
          <Button variant="contained" className="button">
            Sign In
          </Button>
        </Link>
      </div>
    </styles.Container>
  );
};

SignUpForm.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func
  }).isRequired
};

export default withRouter(SignUpForm);
