import styled from 'styled-components';

const Container = styled.div`
  width: 80%;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;

  div {
    background-color: rgb(65, 119, 125);
    margin: 0 4px 0 4px;
    width: 40%;
    height: 1px;
  }

  p {
    color: rgb(65, 119, 125);
    font-family: Roboto;
    font-size: 14px;
  }
`;

export default {
  Container
};
