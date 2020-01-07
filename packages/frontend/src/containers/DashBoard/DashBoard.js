import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Button } from '@material-ui/core';

const DashBoard = userInfo => {
  return (
    <div>
      <div>{userInfo.userInfo.userInfo !== undefined && userInfo.userInfo.userInfo.email}</div>
      <Link to="/">
        <Button variant="contained">Back</Button>
      </Link>
    </div>
  );
};

const mapStateToProps = ({ userInfo }) => ({
  userInfo
});

export default connect(mapStateToProps, null)(DashBoard);
