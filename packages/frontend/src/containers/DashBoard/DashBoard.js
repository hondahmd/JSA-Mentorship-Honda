import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Button } from '@material-ui/core';

import server from 'constants/server';

const DashBoard = userInfo => {
  async function handleClick() {
    const response = await fetch(`http://${server.serverIp}:${server.serverPort}/dashboard`, {
      headers: {
        Authorization: `Bearer ${userInfo.userInfo.token}`
      }
    });
    const data = await response.json();
    console.log(data);
  }

  return (
    <div>
      <div>{userInfo.userInfo.userInfo !== undefined && userInfo.userInfo.userInfo.email}</div>
      <Link to="/">
        <Button variant="contained">Back</Button>
      </Link>
      <Button variant="contained" onClick={() => handleClick()}>
        Request
      </Button>
    </div>
  );
};

const mapStateToProps = ({ userInfo }) => ({
  userInfo
});

export default connect(mapStateToProps, null)(DashBoard);
