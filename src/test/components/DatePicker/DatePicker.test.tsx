import React from "react";
import { useState } from "react";
import { render } from "@testing-library/react";
import { Button, Modal } from "../../../components";
import userEvent from "@testing-library/user-event";
import { DatePicker } from "../../../components/DatePicker";

test("shows and hides modal based on state change", async () => {
  const { getByText, queryByRole, queryByTestId } = render(<DatePicker />);

  const button = getByText("Calendar");

  const datepickerHidden = queryByRole("datepicker");
  expect(datepickerHidden).toBeNull();

  userEvent.click(button);

  const datepicker = queryByRole("datepicker");
  expect(datepicker).toBeNull();
});
