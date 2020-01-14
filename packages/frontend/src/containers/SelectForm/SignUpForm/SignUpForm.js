import React, { useState } from 'react';
import { TextField, Button, CircularProgress } from '@material-ui/core';
import { Link, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

import SplitLine from 'components/MainPage/SignForm/SplitLine/SplitLine';
import server from 'constants/server';
import fieldsCheck from 'constants/fieldsCheck';

import styles from './styles';

const SignUpForm = ({ history }) => {
  const fieldAttrs = [
    { id: 'firstName', label: 'First Name', type: 'text' },
    { id: 'lastName', label: 'Last Name', type: 'text' },
    { id: 'password', label: 'Password', type: 'password' },
    { id: 'confirmPassword', label: 'Confirm Password', type: 'password' },
    { id: 'email', label: 'Email Address', type: 'email' }
  ];
  const initInput = {
    firstName: '',
    lastName: '',
    password: '',
    confirmPassword: '',
    email: ''
  };
  const [state, setState] = useState({ process: 0, filled: false, input: initInput });

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

  const checkInput = () =>
    fieldsCheck.name(state.input.firstName) &&
    fieldsCheck.name(state.input.lastName) &&
    fieldsCheck.email(state.input.email) &&
    fieldsCheck.basic(state.input.password) &&
    fieldsCheck.basic(state.input.confirmPassword) &&
    state.input.password === state.input.confirmPassword;

  function handleInput(event) {
    const { id, value } = event.target;
    const newInput = { ...state.input };
    newInput[id] = value;
    setState({ ...state, filled: checkInput(), input: newInput });
  }

  function handleClick() {
    setState({ ...state, process: 1 });
    const data = {
      email: state.input.email,
      name: `${state.input.firstName} ${state.input.lastName}`,
      password: state.input.password
    };
    fetchSignUp(data);
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

  function genTextField(attrs) {
    return (
      <div className="inputContainer" key={`sign in ${attrs.id}`}>
        <TextField
          id={attrs.id}
          label={attrs.label}
          className="TextField"
          type={attrs.type}
          onChange={e => handleInput(e)}
        />
      </div>
    );
  }

  return (
    <styles.Container>
      {fieldAttrs.map(field => genTextField(field))}
      <div>
        <Button
          variant="contained"
          className={`signUpButton button ${state.process === 2 ? 'successButton' : ''}`}
          onClick={() => handleClick()}
          disabled={!state.filled}
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
