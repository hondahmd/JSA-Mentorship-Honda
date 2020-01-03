import styled from 'styled-components';

const Container = styled.form`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  div {
    margin-bottom: 20px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .TextField {
    width: 80%;
  }
`;

export default {
  Container
};
