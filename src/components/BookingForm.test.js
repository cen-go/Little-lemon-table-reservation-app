import { render, screen, fireEvent } from "@testing-library/react";
import BookingForm from "./BookingForm";
import { BrowserRouter } from "react-router-dom";

test("renders booking form", () => {
  const availableTimes = ["12:00", "13:00", "14:00"];
  render(
    <BrowserRouter>
      <BookingForm availableTimes={availableTimes} />
    </BrowserRouter>
  );
  const dateInputElement = screen.getByLabelText(/date of visit/i);
  expect(dateInputElement).toBeInTheDocument();
});

test("submit button is disbled unless all required fields are filled", () => {
  const availableTimes = ["12:00", "13:00", "14:00"];
  render(
    <BrowserRouter>
      <BookingForm
        availableTimes={availableTimes}
        setResDate={() => {}}
        resDate="2023-10-10"
      />
    </BrowserRouter>
  );

  fireEvent.change(screen.getByLabelText(/date of visit/i), {
    target: { value: "2023-10-10" },
  });
  fireEvent.change(screen.getByLabelText(/time/i), {
    target: { value: "12:00" },
  });
  const submitButton = screen.getByRole("button", { name: /submit/i });

  expect(submitButton).toBeDisabled();
});

test("submit button is enabled all required fields are filled", () => {
  const availableTimes = ["12:00", "13:00", "14:00"];
  render(
    <BrowserRouter>
      <BookingForm
        availableTimes={availableTimes}
        setResDate={() => {}}
        resDate="2023-10-10"
      />
    </BrowserRouter>
  );

  fireEvent.change(screen.getByLabelText(/date of visit/i), {
    target: { value: "2023-10-10" },
  });
  fireEvent.change(screen.getByLabelText(/time/i), {
    target: { value: "12:00" },
  });
  fireEvent.change(screen.getByLabelText(/number of guests/i), {
    target: { value: "3" },
  });
  fireEvent.change(screen.getByLabelText(/seating options/i), {
    target: { value: "outside" },
  });
  fireEvent.change(screen.getByLabelText(/first name/i), {
    target: { value: "Vito" },
  });
  fireEvent.change(screen.getByLabelText(/last name/i), {
    target: { value: "Corleone" },
  });
  fireEvent.change(screen.getByLabelText(/email/i), {
    target: { value: "vito@mail.com" },
  });
  fireEvent.change(screen.getByLabelText(/mobile phone/i), {
    target: { value: "5264589874" },
  });
  const submitButton = screen.getByRole("button", { name: /submit/i });

  expect(submitButton).not.toBeDisabled();
});
