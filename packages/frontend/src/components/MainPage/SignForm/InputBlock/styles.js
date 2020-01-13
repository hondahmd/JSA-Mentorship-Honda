import styled from 'styled-components';

import common from 'constants/styles';

const Container = styled.div`
  ${common.defaultInputBlock}
  margin-bottom: 20px;
  flex-direction: column;

  .TextField {
    width: 80%;
  }
`;

export default Container;
