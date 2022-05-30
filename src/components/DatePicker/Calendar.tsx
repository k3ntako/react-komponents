import React, { MouseEventHandler, ReactNode } from "react";
import styled from "styled-components";

const MONTHS = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

export interface CalendarProps {
  date: Date;
  onChange: (date: Date) => void;
}

const HeaderDiv = styled.div`
  text-align: center;
  font-weight: 700;
  margin: 10px 0;
`;

const CalendarGridDiv = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
`;

const DayDiv = styled.div(
  ({
    bold,
    onClick,
  }: {
    bold?: boolean;
    onClick?: MouseEventHandler<HTMLButtonElement>;
  }) => `
  height: 30px;
  width: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: ${bold ? 700 : 400};

 ${
   onClick &&
   `&:hover{
      background-color: lightgray;
      cursor: pointer;
    }`
 }
`
);

const daysInMonth = (date: Date) => {
  const month = date.getMonth() + 1;
  const year = date.getFullYear();

  return new Date(year, month, 0).getDate();
};

const getEmptyDays = (date: Date) => {
  date.setDate(1);

  const days = [];
  for (let i = 0; i < date.getDay(); i++) {
    days.push(<div key={`empty-${i}`}></div>);
  }

  return days;
};

export const Calendar = ({ date, onChange }: CalendarProps): JSX.Element => {
  let days: ReactNode[] = ["S", "M", "T", "W", "T", "F", "S"].map((day, i) => (
    <DayDiv key={`${day}-${i}`} bold>
      {day}
    </DayDiv>
  ));

  days = days.concat(getEmptyDays(date));

  const onDayClick = (dayOfMonth: number) => {
    const selectedDate = new Date(
      date.getFullYear(),
      date.getMonth(),
      dayOfMonth
    );

    onChange(selectedDate);
  };

  for (let i = 1; i <= daysInMonth(date); i++) {
    days.push(
      <DayDiv key={`day-${i}`} onClick={() => onDayClick(i)}>
        {i}
      </DayDiv>
    );
  }

  return (
    <div>
      <HeaderDiv>{MONTHS[date.getMonth()]}</HeaderDiv>
      <CalendarGridDiv>{days}</CalendarGridDiv>
    </div>
  );
};
