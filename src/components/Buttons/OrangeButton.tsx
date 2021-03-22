import React from "react";
import styled from "styled-components";

const Orange = styled.button`
  background-color: ${({ theme }) => theme.colors.main};
  color: ${({ theme }) => theme.colors.white};
  min-width: 170px;
  height: 56px;
  font-size: 16px;
  border-radius: 5px;
  border: none;
`;

const OrangeButton: React.FC<React.ButtonHTMLAttributes<HTMLButtonElement>> = (
  props
) => {
  return <Orange {...props} />;
};

export default OrangeButton;
