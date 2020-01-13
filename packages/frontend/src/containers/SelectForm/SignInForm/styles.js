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
    flex-direction: column;
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

  .alertLine {
    margin-top: 4px;
    width: 80%;
    height: 20px;
  }

  .alertContent {
    margin: 0;
    font-size: 14px;
    font-family: Roboto;
  }

  .alertError {
    color: #e57373;
  }

  .alertCorrect {
    color: rgb(72, 173, 88);
  }
`;

export default {
  Container
};
