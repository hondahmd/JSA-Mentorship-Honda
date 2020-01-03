import styled from 'styled-components';

import common from 'constants/styles';

const Container = styled.div`
  ${common.defaultAlignCenter}

  div {
    margin-bottom: 40px;
    width: 80%;
    display: flex;
    justify-content: center;
  }

  .button {
    width: 100px;
  }
`;

export default {
  Container
};
