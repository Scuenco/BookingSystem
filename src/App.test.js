import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import App from './App';
import React from "react";
import { BrowserRouter, MemoryRouter, useLocation} from 'react-router-dom';
import userEvent from '@testing-library/user-event';
import BookingForm from './components/BookingForm';
import BookingForm2 from './components/BookingForm2';

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

  jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useLocation: jest.fn(),
  }));

test('BookingForm2 displays correct data from location.state', () => {
  const mockLocation = {
    pathname: '/reservations/details',
    state: {
      formData: {date: "2024-10-21", time: "17:00", guests: "2", occassion: "Birthday", option: "Table"}}};

  useLocation.mockReturnValue(mockLocation );
  render(<BookingForm2 />);

  expect(screen.getByText('Date: 2024-10-21')).toBeInTheDocument();
  expect(screen.getByText('Time: 17:00')).toBeInTheDocument();
  expect(screen.getByText('Guests: 2')).toBeInTheDocument();
});

test("User is not able to submit the form if the Firstname field is blank", async () => {
  const mockLocation = {
    pathname: '/reservations/details',
    state: {
      formData: {date: "2024-10-21", time: "17:00", guests: "2", occassion: "Birthday", option: "Table"}}};

  useLocation.mockReturnValue(mockLocation );

  render(<BookingForm2 />);
  screen.getByLabelText('First Name*').focus();
  screen.getByLabelText('Last Name*').focus();

  await waitFor(() => {
    expect(screen.getByText("First name is required.")).toBeInTheDocument();
  });
});

test("User is not able to submit the form if the Lastname field is blank", async () => {
  const mockLocation = {
    pathname: '/reservations/details',
    state: {
      formData: {date: "2024-10-21", time: "17:00", guests: "2", occassion: "Birthday", option: "Table"}}};

  useLocation.mockReturnValue(mockLocation );

  render(<BookingForm2 />);
  screen.getByLabelText('Last Name*').focus();
  screen.getByLabelText('Email*').focus();

  await waitFor(() => {
    expect(screen.getByText("Last name is required.")).toBeInTheDocument();
  });
});

test("User is not able to submit the form if the Email field is blank", async () => {
  const mockLocation = {
    pathname: '/reservations/details',
    state: {
      formData: {date: "2024-10-21", time: "17:00", guests: "2", occassion: "Birthday", option: "Table"}}};

  useLocation.mockReturnValue(mockLocation );

  render(<BookingForm2 />);
  screen.getByLabelText('Email*').focus();
  screen.getByLabelText('Last Name*').focus();

  await waitFor(() => {
    expect(screen.getByText("Email is required.")).toBeInTheDocument();
  });
});

test("User is not able to submit the form if the Phone Number field is blank", async () => {
  const mockLocation = {
    pathname: '/reservations/details',
    state: {
      formData: {date: "2024-10-21", time: "17:00", guests: "2", occassion: "Birthday", option: "Table"}}};

  useLocation.mockReturnValue(mockLocation );

  render(<BookingForm2 />);
  screen.getByLabelText('Phone Number*').focus();
  screen.getByLabelText('Email*').focus();

  await waitFor(() => {
    expect(screen.getByText("Phone no. is required.")).toBeInTheDocument();
  });
});


test('Displays error message when selected time field is blank', () => {
  const availableTimes = ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
  render(<BrowserRouter><BookingForm availableTimes={availableTimes}/></BrowserRouter>);
  const timeInput = screen.getByLabelText('Time*');
  fireEvent.change(timeInput, {target: { value: ''}});
  const errorMessage = screen.getByText(
    (_, element) => element.textContent === 'Invalid time. Please select a valid time.');
    expect(errorMessage).toBeInTheDocument();
});

test('No error message is displayed when selected time field is not blank', () => {
  const availableTimes = ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
  render(<BrowserRouter><BookingForm availableTimes={availableTimes}/></BrowserRouter>);
  const timeInput = screen.getByLabelText('Time*');
  fireEvent.change(timeInput, {target: { value: '17:00'}});
  expect(screen.queryByText('Invalid time. Please select a valid time.')).not.toBeInTheDocument();
});

test('An error message is displayed if 0 guest is entered', () => {
  const availableTimes = ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
  render(<BrowserRouter><BookingForm availableTimes={availableTimes}/></BrowserRouter>);
  const guestInput = screen.getByLabelText('Number of guests*');
  userEvent.type(guestInput, '0');
  const errorMessage = screen.getByText('Guests must be 1 or more.');
  expect(errorMessage).toBeInTheDocument();
});

test('No error message is displayed if minimum of 1 guest is entered', () => {
  const availableTimes = ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
  render(<BrowserRouter><BookingForm availableTimes={availableTimes}/></BrowserRouter>);
  const guestInput = screen.getByLabelText('Number of guests*');
  userEvent.type(guestInput, '2');
  expect(screen.queryByText('Guests must be 1 or more.')).not.toBeInTheDocument();
});

test('Should submit the form with valid data', async() => {
  const mockLocation = {
    pathname: '/reservations/details',
    state: {
      formData: {date: "2024-10-21", time: "17:00", guests: "2", occassion: "Birthday", option: "Table"}}};
  useLocation.mockReturnValue(mockLocation );
  const mockSubmit = jest.fn();
  render(<BookingForm2 submitForm={mockSubmit} />);

  // simulate valid data
  await userEvent.type(screen.getByLabelText('First Name*'), "Jane");
  await userEvent.type(screen.getByLabelText('Last Name*'), "Doe");
  await userEvent.type(screen.getByLabelText('Email*'), "Jane@test.com");
  await userEvent.type(screen.getByLabelText('Phone Number*'), "1234567890");

  fireEvent.click(screen.getByTestId('reserve'));
  expect(mockSubmit).toHaveBeenCalled(); // Check if the function was called

  expect(screen.queryByText("First name is required.")).not.toBeInTheDocument();
  expect(screen.queryByText("The minimum length required is 2.")).not.toBeInTheDocument();
  expect(screen.queryByText("The maximum length required is 12.")).not.toBeInTheDocument();
  expect(screen.queryByText("Last name is required.")).not.toBeInTheDocument();

  expect(screen.queryByText("Email is required.")).not.toBeInTheDocument();
  expect(screen.queryByText("Email is invalid.")).not.toBeInTheDocument();

  expect(screen.queryByText("Phone no. is required.")).not.toBeInTheDocument();
  expect(screen.queryByText("Phone no. is invalid.")).not.toBeInTheDocument();
})