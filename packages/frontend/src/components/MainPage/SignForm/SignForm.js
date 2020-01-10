import React from 'react';

import { Switch, Route } from 'react-router-dom';

import SignInForm from 'containers/SelectForm/SignInForm/SignInForm';
import SignUpForm from 'containers/SelectForm/SignUpForm/SignUpForm';

import styles from './styles';

const signForm = () => {
  return (
    <styles.Container>
      <Switch>
        <Route path="/signup">
          <SignUpForm />
        </Route>
        <Route path="/">
          <SignInForm />
        </Route>
      </Switch>
    </styles.Container>
  );
};

export default signForm;
