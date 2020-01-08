import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Button } from '@material-ui/core';

import server from 'constants/server';

const DashBoard = userInfo => {
  const defaultFetch = 'Waiting for fetch data';
  const [fetchData, setFetchData] = useState(defaultFetch);

  async function handleClick() {
    const response = await fetch(`http://${server.serverIp}:${server.serverPort}/dashboard`, {
      headers: {
        Authorization: `Bearer ${userInfo.userInfo.token}`
      }
    });
    const data = await response.json();
    setFetchData(data.message);
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
      <div>{fetchData}</div>
    </div>
  );
};

const mapStateToProps = ({ userInfo }) => ({
  userInfo
});

export default connect(mapStateToProps, null)(DashBoard);
