import { render, screen, fireEvent, queryAllByText } from '@testing-library/react';
import App from './App';
import React, {useReducer} from "react";
import BookingForm, { availableTimes, dispatch} from './BookingForm';
import userEvent from '@testing-library/user-event';

test('Must render the static text heading', () => {
  render(<BookingForm availableTimes={[
    { value: "11:00 am" },
    { value: "12:00 nn" },
    { value: "6:00 pm" },
    { value: "7:00 pm" },
    { value: "8:00 pm" }
  ]} />);
  const headingElement = screen.getByText("Reservations");
  expect(headingElement).toBeInTheDocument();
});

test('initializeTimes must return the expected value', async () => {
  const availableTimes = [
    { value: "11:00 am" },
    { value: "12:00 nn" },
    { value: "6:00 pm" },
    { value: "7:00 pm" },
    { value: "8:00 pm" } ];

  const mockDispatch = jest.fn();
  render(<BookingForm availableTimes={availableTimes} dispatch={mockDispatch}/>);
  const selectElement = screen.getByTestId('select-option', {name: 'select-time'});
  await userEvent.selectOptions(selectElement, "11:00 am" );
  expect(selectElement.length).toEqual(availableTimes.length);
});
