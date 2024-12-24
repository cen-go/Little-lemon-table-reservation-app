import { render, screen } from "@testing-library/react"
import BookingForm from "./BookingForm"


test("renders booking form", () => {
  const availableTimes = ["12:00", "13:00", "14:00"];
  render(<BookingForm availableTimes={availableTimes} />);
  const dateInputElement = screen.getByLabelText(/date of visit/i);
  expect(dateInputElement).toBeInTheDocument();
});