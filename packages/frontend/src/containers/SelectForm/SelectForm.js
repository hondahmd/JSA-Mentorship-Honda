import React, { useState } from 'react';
import { Button } from '@material-ui/core';

import SignInForm from './SignInForm/SignInForm';
import SignUpForm from './SignUpForm/SignUpForm';

import styles from './styles';

const SelectForm = () => {
  const buttons = [
    { id: 'signIn', content: 'Sign In', key: 'main sign in' },
    { id: 'signUp', content: 'Sign Up', key: 'main sign up' }
  ];
  const [selected, setSelected] = useState('main');

  function handleClick(event) {
    setSelected(event.target.id);
  }

  function display() {
    let show = (
      <styles.Container>
        {buttons.map(button => (
          <div key={button.key}>
            <Button
              variant="contained"
              className="button"
              id={button.id}
              onClick={e => handleClick(e)}
            >
              {button.content}
            </Button>
          </div>
        ))}
      </styles.Container>
    );
    if (selected === 'signIn') {
      show = <SignInForm />;
    } else if (selected === 'signUp') {
      show = <SignUpForm />;
    }
    return show;
  }

  return display();
};

export default SelectForm;
