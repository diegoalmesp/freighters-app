import styled, { css } from "styled-components";

/**
 * Diego:
 * I'm a huge fan of styled components,
 * it allows to easily share styles with other styled components
 * this is basic inheritance with `css`:
 */
const Size = css`
  display: block;
  width: max-content;
  margin: 20px auto;
  padding: 10px;
  border-radius: 5px;
  box-shadow: ${({ theme }) => theme.shadow};
`;

export const StyledNotice = styled.div`
  ${Size}
  background-color: ${({ theme }) => theme.colors.main};
  color: ${({ theme }) => theme.colors.white};
`;

export const StyledWarning = styled.div`
  ${Size}
  background-color: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.black};
`;
