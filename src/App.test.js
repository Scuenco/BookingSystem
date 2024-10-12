import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import App from './App';
import React from "react";
import { BrowserRouter} from 'react-router-dom';
import BookingForm from './BookingForm';

test('Must render the static text heading', () => {
  const availableTimes = ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
  render(<BrowserRouter><BookingForm availableTimes={availableTimes}/></BrowserRouter>);
  const headingElement = screen.getByText("Reservations");
  expect(headingElement).toBeInTheDocument();
});

// Mock the fetch function
global.fetch = jest.fn(() =>
Promise.resolve({
  json: () => Promise.resolve({data: ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"]}),
}))

test('initializeTimes must call the fetchAPI and renders', async () => {
  const availableTimes = ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
  render(<BrowserRouter><BookingForm availableTimes={availableTimes}/></BrowserRouter>);
  await waitFor(() => {
    expect(screen.getByTestId('select-option')).toBeInTheDocument();
  })
})

  beforeEach(() => {
  localStorage.clear();
})

test('updateTimes should retrieve data from localStorage', async() => {
  localStorage.setItem('2024-10-12', '["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"]');
  const availableTimes = ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
  render(<BrowserRouter>< BookingForm availableTimes={availableTimes} /></BrowserRouter>);
  await fireEvent.select(screen.getByTestId('select-date', {target: {value: '2024-10-10' }}));
  await fireEvent.change(screen.getByTestId('select-option', {target: {value: "17:00"}}));

  expect(localStorage.getItem('2024-10-12')).toBe('["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"]');
} );
