import React from "react";
import { useState } from "react";
import { prettyDOM, render, screen } from "@testing-library/react";
import { Button, Modal } from "../../../components";
import userEvent from "@testing-library/user-event";

// Creates page with Modal and Buttons to show/hide it
const TestPage = (): JSX.Element => {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  return (
    <div>
      <Modal
        isVisible={isVisible}
        title="Modal Title"
        onClose={() => setIsVisible(false)}
        bottomButtonProps={[
          {
            children: "Close Modal",
            onClick: () => setIsVisible(false),
          },
        ]}
      >
        <Button aria-label="close-modal" onClick={() => setIsVisible(false)}>
          Close
        </Button>
      </Modal>
      <Button aria-label="open-modal" onClick={() => setIsVisible(true)}>
        Open
      </Button>
    </div>
  );
};

test("shows and hides modal based on state change", async () => {
  const { getByText, queryByRole, queryByTestId } = render(<TestPage />);
  const openButton = getByText("Open");
  userEvent.click(openButton);

  const modal = queryByRole("dialog");
  expect(modal).toBeInTheDocument();
  expect(modal).toHaveTextContent("Close");

  const closeButton = getByText("Close");
  userEvent.click(closeButton);

  const modalAfterClose = queryByRole("dialog");
  expect(modalAfterClose).toBeNull();

  const modalContainerAfterClose = queryByTestId("modal-container");
  expect(modalContainerAfterClose).not.toBeVisible();
});

test("clicking background closes modal", async () => {
  const { getByText, getByTestId, queryByTestId } = render(<TestPage />);
  const openButton = getByText("Open");
  userEvent.click(openButton);

  const modalContainer = getByTestId("modal-container");
  expect(modalContainer).toBeInTheDocument();
  expect(modalContainer).toBeVisible();
  userEvent.click(modalContainer);

  const modalContainerAfterClose = queryByTestId("modal-container");
  expect(modalContainerAfterClose).not.toBeVisible();
});

test("displays bottom buttons", async () => {
  const { getByText, getByTestId, queryByTestId } = render(<TestPage />);
  const openButton = getByText("Open");
  userEvent.click(openButton);

  const closeButton = getByText("Close Modal");
  userEvent.click(closeButton);

  const modalContainerAfterClose = queryByTestId("modal-container");
  expect(modalContainerAfterClose).not.toBeVisible();
});
