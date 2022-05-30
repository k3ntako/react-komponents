import React, { useRef, useState } from "react";
import styled from "styled-components";
import { Button } from "../Button";
import { Calendar } from "./Calendar";

export interface DatePickerProps {
  onChange: (date: Date) => void;
}

const StyledButton = styled.span`
  position: relative;
`;

const StyledDatePicker = styled.div(
  ({
    isVisible,
    buttonHeight,
    buttonWidth,
  }: {
    isVisible: boolean;
    buttonHeight: number;
    buttonWidth: number;
  }) => `
    display: ${isVisible ? "block" : "none"};
    width: 230px;
    padding: 10px;
    border: 1px solid #aaa;
    border-radius: 5px;
    background-color: white;
    position: absolute;
    bottom: ${buttonHeight}px;
    left: ${(buttonWidth - 230) / 2}px;
    box-shadow: 5px 2px 2px rgba(0,0,0,0.3);
  `
);

export const DatePicker = ({ onChange }: DatePickerProps): JSX.Element => {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const calendarButton = useRef<HTMLButtonElement>(null);

  const onDateChange = (date: Date) => {
    setIsVisible(false);
    onChange(date);
  };

  console.log("change");

  const datePicker = (
    <StyledDatePicker
      role="datepicker"
      isVisible={isVisible}
      buttonHeight={calendarButton?.current?.clientHeight || 0}
      buttonWidth={calendarButton?.current?.clientWidth || 0}
    >
      <Calendar date={new Date()} onChange={onDateChange} />
    </StyledDatePicker>
  );

  return (
    <StyledButton>
      <Button ref={calendarButton} onClick={() => setIsVisible(!isVisible)}>
        Calendar
      </Button>
      {isVisible && datePicker}
    </StyledButton>
  );
};
