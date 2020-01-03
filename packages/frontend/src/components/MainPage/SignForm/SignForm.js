import React from 'react';

import SignInForm from 'containers/SignInForm/SignInForm';
// import SignUpForm from 'containers/SignUpForm/SignUpForm';

import styles from './styles';

const signForm = () => {
  return (
    <styles.Container>
      <SignInForm />
      {/* <SignUpForm /> */}
    </styles.Container>
  );
};

export default signForm;
