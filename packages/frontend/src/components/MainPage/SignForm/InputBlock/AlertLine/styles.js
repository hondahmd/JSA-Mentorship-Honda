import styled from 'styled-components';

const Container = styled.div`
  margin-top: 4px;
  width: 80%;
  height: 20px;

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

export default Container;
