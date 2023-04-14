// 'transaction-history';
import styled from 'styled-components';

export const Table = styled.table`
  margin-top: 20px;
  margin-left: auto;
  margin-right: auto;
  width: 500px;
  border: 5px solid black;
`;
export const Thead = styled.thead`
  text-transform: uppercase;
  border: 5px solid black;
`;
export const Tbody = styled.tbody`
  text-align: center;
`;
export const TRow = styled.tr`
  height: 20px;
  font-size: 20px;

  :nth-child(2n + 1) {
    background-color: lightgrey;
  }
  :nth-child(2n) {
    background-color: orange;
  }
`;
