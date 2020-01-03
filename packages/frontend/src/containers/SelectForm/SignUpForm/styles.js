import styled from 'styled-components';

import common from 'constants/styles';

const Container = styled.form`
  ${common.defaultAlignCenter}

  div {
    ${common.defaultTextInput}
  }

  .TextField {
    width: 80%;
  }
`;

export default {
  Container
};
