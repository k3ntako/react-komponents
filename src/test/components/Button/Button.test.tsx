import React from "react";
import { render, screen } from "@testing-library/react";
import { Button } from "../../../components";
import userEvent from "@testing-library/user-event";

test("renders button with text", () => {
  const { getByRole } = render(<Button>Learn React</Button>);
  const buttonElement = getByRole("button");
  expect(buttonElement).toBeInTheDocument();
  expect(buttonElement).toHaveTextContent("Learn React");
});

test("renders button with text", () => {
  const onClick = jest.fn();
  const { getByRole } = render(<Button onClick={onClick}>Learn React</Button>);
  const buttonElement = getByRole("button");
  userEvent.click(buttonElement);
  expect(onClick).toHaveBeenCalled();
});
