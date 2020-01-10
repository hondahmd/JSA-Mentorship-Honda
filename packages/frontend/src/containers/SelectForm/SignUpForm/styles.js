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

  .button {
    width: 100px;
    height: 40px;
  }

  .successButton {
    background-color: rgb(72, 173, 88);
  }

  .signUpButton {
    margin-top: 20px;
  }

  .circle {
    color: rgb(72, 173, 88);
  }
`;

export default {
  Container
};
