import styled from 'styled-components';

import common from 'constants/styles';

const Container = styled.div`
  ${common.defaultAlignCenter}

  a {
    text-decoration: none;
  }

  .signInButton {
    margin-top: 20px;
    width: 100px;
    height: 40px;
  }

  .successButton {
    background-color: rgb(72, 173, 88);
  }
`;

export default Container;