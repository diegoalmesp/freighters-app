import styled from "styled-components";

export const FreighterListElement = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-around;
  max-width: 800px;
  margin: 0 auto;
  margin-top: 10px;
  padding: 10px 0;
  box-shadow: ${({ theme }) => theme.shadow};
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 5px;
  cursor: pointer;
  height: 92px;
  :hover {
    box-shadow: 0px 0px 0px 1px ${({ theme }) => theme.colors.main};
    & b {
      color: ${({ theme }) => theme.colors.main};
    }
  }
`;
