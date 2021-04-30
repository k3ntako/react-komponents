import React from "react";
import styled from "styled-components";
import { Button, ButtonProps } from "../Button";

export interface ModalProps {
  children?: React.ReactNode;
  title?: string;
  isVisible: boolean;
  onClose: () => void;
  bottomButtonProps?: ButtonProps[];
}

const StyledModalContainer = styled.div(
  ({ isVisible }: { isVisible: boolean }) => `
    position: fixed;
    z-index: 99999;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    display: ${isVisible ? "flex" : "none"};
    align-items: center;
    background-color: rgba(0,0,0,0.5);
  `
);

const StyledModal = styled.div`
  background-color: white;
  border-radius: 5px;
  padding: 24px;
  max-heigt: 90%;
  min-width: 100px;
  max-width: 450px;
  width: 80%;
  margin: auto;
`;

const StyledHeader = styled.header`
  font-size: 24px;
  font-weight: 700;
  padding-bottom: 24px;
`;

const StyledFooter = styled.footer`
  text-align: right;
  padding-top: 24px;

  button:not(:first-child) {
    margin-left: 12px;
  }
`;

// ModalContainer has onClick={onClose} and by default it's applied to all children.
// This prevents the parent onClick affecting the children.
const stopPropagation = (
  event: React.MouseEvent<HTMLDivElement, MouseEvent>
) => {
  event.stopPropagation();
};

export const Modal = ({
  children,
  isVisible,
  title,
  onClose,
  bottomButtonProps,
}: ModalProps): JSX.Element => {
  return (
    <StyledModalContainer
      isVisible={isVisible}
      data-testid="modal-container"
      onClick={onClose}
    >
      <StyledModal role="dialog" onClick={stopPropagation}>
        <StyledHeader>{title}</StyledHeader>
        {children}
        <StyledFooter>
          {bottomButtonProps &&
            bottomButtonProps.map((args, idx) => (
              <Button key={idx} {...args} />
            ))}
        </StyledFooter>
      </StyledModal>
    </StyledModalContainer>
  );
};
