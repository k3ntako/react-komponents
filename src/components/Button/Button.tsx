import React, { MouseEventHandler } from "react";
import styled from "styled-components";

const defaultColor = "transparent";
const primaryColor = "#1976d2";

interface StyleForSize {
  fontSize: string;
  padding: string;
}

interface SizeStyles {
  small: StyleForSize;
  medium: StyleForSize;
  large: StyleForSize;
}

const SIZE_STYLES: SizeStyles = {
  small: {
    fontSize: "14px",
    padding: "8px 16px",
  },
  medium: {
    fontSize: "16px",
    padding: "12px 24px",
  },
  large: {
    fontSize: "18px",
    padding: "14px 28px",
  },
};

type ButtonSize = keyof SizeStyles;

export interface ButtonProps {
  children?: React.ReactNode;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  primary?: boolean;
  size?: ButtonSize;
}

const StyledButton = styled.button(
  ({ primary, size }: { primary?: boolean; size: ButtonSize }) => `
  background-color: ${primary ? primaryColor : defaultColor};
  color: ${primary ? "white" : "black"};
  border-radius: 5px;
  font-size: ${SIZE_STYLES[size].fontSize};
  padding: ${SIZE_STYLES[size].padding};
  font-weight: 700;
  border: none;
  box-shadow: ${primary ? "none" : "rgba(0, 0, 0, 0.15) 0px 0px 0px 1px inset"};
  cursor: pointer;
`
);

export const Button = ({
  children,
  onClick,
  primary,
  size = "medium",
}: ButtonProps): JSX.Element => {
  return (
    <StyledButton onClick={onClick} primary={primary} size={size}>
      {children}
    </StyledButton>
  );
};
