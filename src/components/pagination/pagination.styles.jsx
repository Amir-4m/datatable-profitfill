import styled from 'styled-components';

export const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px 0;
`;

export const PaginationButton = styled.button`
  padding: 8px 16px;
  background-color: #18a68e;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin: 0 5px;

  &:hover {
   background-color: #000;
  }

  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
`;
