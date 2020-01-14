import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@material-ui/core';
import PropTypes from 'prop-types';

import Container from './styles';

const JumpButton = ({ path, content }) => {
  return (
    <Container>
      <Link to={path}>
        <Button variant="contained" className="button">
          {content}
        </Button>
      </Link>
    </Container>
  );
};

JumpButton.defaultProps = {
  path: '/',
  content: ''
};

JumpButton.propTypes = {
  path: PropTypes.string,
  content: PropTypes.string
};

export default JumpButton;
