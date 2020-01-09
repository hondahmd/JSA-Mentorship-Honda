import styled from 'styled-components';

import common from 'constants/styles';

const Container = styled.div`
  background-color: rgb(${common.primaryColor});
  width: 600px;
  height: 800px;
  border-radius: 20px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.4);
`;

export default {
  Container
};
