import React from "react";
import styled from "styled-components";

const StyledCloseButton = styled.button`
  width: 40px;
  height: 40px;
  border-radius: 20px;
  border: none;
  font-size: 20px;
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.main};
  cursor: pointer;
`;

const CloseButton: React.FC<{ onClick: () => void; props?: any }> = ({
  onClick,
  ...props
}) => {
  return (
    <StyledCloseButton {...props} onClick={onClick}>
      x
    </StyledCloseButton>
  );
};

export default CloseButton;
