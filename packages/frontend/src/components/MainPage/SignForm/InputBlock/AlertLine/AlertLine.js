import React from 'react';
import PropTypes from 'prop-types';

import Container from './styles';

const AlertLine = ({ content, show, status }) => {
  return (
    <Container>
      <p hidden={!show} className={`alertContent ${status ? 'alertCorrect' : 'alertError'}`}>
        {content}
      </p>
    </Container>
  );
};

AlertLine.defaultProps = {
  content: '',
  show: false,
  status: false
};

AlertLine.propTypes = {
  content: PropTypes.string,
  show: PropTypes.bool,
  status: PropTypes.bool
};

export default AlertLine;
