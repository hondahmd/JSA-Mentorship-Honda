import React, { useContext } from 'react';
import { TextField } from '@material-ui/core';
import PropTypes from 'prop-types';

import SignInFormDispatch from 'containers/Forms/SignInForm/context';
import AlertLine from './AlertLine/AlertLine';
import fieldsCheck from './fieldsCheck';

import Container from './styles';

const InputBlock = ({ id, label, type, content, show, status }) => {
  const dispatch = useContext(SignInFormDispatch);

  function handleInput(event) {
    const { id, value } = event.target;
    const pairs = {
      email: { type: 'EMAIL_ALERT_STATUS', payload: { status: fieldsCheck.email(value) } },
      password: { type: 'PASSWORD_ALERT_STATUS', payload: { status: fieldsCheck.basic(value) } }
    };
    return pairs[id];
  }

  return (
    <Container>
      <TextField
        id={id}
        label={label}
        type={type}
        className="TextField"
        onChange={e => dispatch(handleInput(e))}
      />
      <AlertLine content={content} show={show} status={status} />
    </Container>
  );
};

InputBlock.defaultProps = {
  content: '',
  show: false,
  status: false
};

InputBlock.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  content: PropTypes.string,
  show: PropTypes.bool,
  status: PropTypes.bool
};

export default InputBlock;
