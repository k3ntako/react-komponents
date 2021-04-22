import React, { MouseEventHandler } from "react";
import styled from "styled-components";

interface ButtonProps {
  children?: React.ReactNode;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

const StyledButton = styled.button`
  background-color: #1976d2;
  border: none;
  border-radius: 5px;
  color: white;
  font-size: 20px;
  padding: 12px;
`;

export const Button = ({ children, onClick }: ButtonProps): JSX.Element => {
  return <StyledButton onClick={onClick}>{children}</StyledButton>;
};
