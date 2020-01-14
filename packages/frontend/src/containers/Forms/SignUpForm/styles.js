import styled from 'styled-components';

import common from 'constants/styles';

const Container = styled.div`
  ${common.defaultAlignCenter}

  a {
    text-decoration: none;
  }

  .signUpButton {
    width: 100px;
    height: 40px;
    margin-top: 20px;
  }

  .successButton {
    background-color: rgb(72, 173, 88);
  }
`;

export default Container;
