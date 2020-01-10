import styled from 'styled-components';

import common from 'constants/styles';

const Container = styled.form`
  ${common.defaultAlignCenter}

  a {
    text-decoration: none;
  }

  .inputContainer {
    ${common.defaultTextInput};
    margin-bottom: 20px;
  }

  .TextField {
    width: 80%;
  }

  .signInButton {
    margin-top: 20px;
  }

  .orContainer {
    margin: 6px;
  }

  .button {
    width: 100px;
    height: 40px;
  }
`;

export default {
  Container
};
