import React, { useState } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Button } from '@material-ui/core';
import PropTypes from 'prop-types';

import server from 'constants/server';

const DashBoard = ({ userInfo, history }) => {
  const defaultFetch = 'Waiting for fetch data';
  const [fetchData, setFetchData] = useState(defaultFetch);

  async function handleClick() {
    const cookieToken = document.cookie.split('=')[1];
    const response = await fetch(`http://${server.serverIp}:${server.serverPort}/dashboard`, {
      headers: {
        Authorization: `Bearer ${cookieToken}`
      }
    });
    const data = await response.json();
    setFetchData(data.message);
  }

  function logOut() {
    document.cookie = 'token=;expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
    history.push('/');
  }

  return (
    <div>
      <div>{userInfo.userInfo.userInfo !== undefined && userInfo.userInfo.userInfo.email}</div>
      <Button variant="contained" onClick={() => logOut()}>
        Log Out
      </Button>
      <Button variant="contained" onClick={() => handleClick()}>
        Request
      </Button>
      <div>{fetchData}</div>
    </div>
  );
};

DashBoard.defaultProps = {
  userInfo: {},
  history: {}
};

DashBoard.propTypes = {
  userInfo: PropTypes.shape({
    userInfo: {
      userInfo: PropTypes.string,
      email: PropTypes.string
    }
  }),
  history: {
    push: PropTypes.func
  }
};

const mapStateToProps = ({ userInfo }) => ({
  userInfo
});

export default connect(mapStateToProps, null)(withRouter(DashBoard));
