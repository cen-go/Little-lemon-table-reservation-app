import BookingForm from "../components/BookingForm";

export default function ReservationPage({
  availableTimes,
  resDate,
  setResDate,
}) {
  return (
    <>
      <div className="res-bg">
        <h1>RESERVATIONS</h1>
      </div>
      <h2 className="res-form-heading">PLAN YOUR VISIT</h2>
      <BookingForm
        availableTimes={availableTimes}
        resDate={resDate}
        setResDate={setResDate}
      />
    </>
  );
}
