import React, { useContext } from 'react';
import { TextField } from '@material-ui/core';
import PropTypes from 'prop-types';

import { SignInFormDispatch } from 'src/containers/Forms/SignInForm/dataCarrier';
import AlertLine from './AlertLine/AlertLine';

import Container from './styles';

const InputBlock = ({ id, label, type, content, show, status }) => {
  const dispatch = useContext(SignInFormDispatch);

  return (
    <Container>
      <TextField
        id={id}
        label={label}
        type={type}
        className="TextField"
        onChange={e => {
          return dispatch({ type: 'TEXT_INPUT', payload: { changeId: id, input: e.target.value } });
        }}
        onFocus={() => dispatch({ type: 'TEXT_FOCUS', payload: { focusId: id } })}
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
