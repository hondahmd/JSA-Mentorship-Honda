import React from 'react';
import { TextField } from '@material-ui/core';
import PropTypes from 'prop-types';

import AlertLine from './AlertLine/AlertLine';

import Container from './styles';

const InputBlock = ({ attrs, state, dispatch }) => {
  const { id, label, type, alerts } = attrs;

  return (
    <Container>
      <TextField
        id={id}
        label={label}
        type={type}
        className="TextField"
        onChange={e =>
          dispatch({ type: 'TEXT_INPUT', payload: { changeId: id, input: e.target.value } })
        }
        onFocus={() => dispatch({ type: 'TEXT_FOCUS', payload: { focusId: id } })}
      />
      <AlertLine
        content={state[id].status ? alerts.correct : alerts.error}
        show={state[id].show}
        status={state[id].status}
      />
    </Container>
  );
};

InputBlock.defaultProps = {
  attrs: {
    id: '',
    label: '',
    type: 'text',
    alerts: {
      correct: '',
      alert: ''
    }
  },
  state: {},
  dispatch: null
};

InputBlock.propTypes = {
  attrs: PropTypes.shape({
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    alerts: PropTypes.shape({
      correct: PropTypes.string,
      error: PropTypes.string
    })
  }),
  state: PropTypes.shape({
    input: PropTypes.string,
    show: PropTypes.bool,
    status: PropTypes.bool
  }),
  dispatch: PropTypes.func
};

export default InputBlock;
