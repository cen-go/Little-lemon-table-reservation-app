import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { submitAPI } from "../API";

export default function BookingForm({
  availableTimes,
  resDate,
  setResDate,
}) {
  const [resData, setResData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    tel: "",
    time: "",
    seating: "",
    guests: "",
    occasion: "",
    notes: "",
  });

  const [isSbmitting, setIsSubmitting] = useState(false);
  const [isInvalid, setIsInvalid] = useState(true);

  useEffect(() => {
    if (resDate && resData.guests  && resData.seating && resData.time && resData.firstName && resData.lastName && resData.email && resData.tel) {
      setIsInvalid(false);
    }
    if (!resDate || !resData.guests  || !resData.seating || !resData.time || !resData.firstName || !resData.lastName || !resData.email || !resData.tel) {
      setIsInvalid(true);
    }
  }, [resData, resDate]);


  const navigate = useNavigate();

  function handleChange(value, propertyName) {
    setResData((prevResData) => {
      return {
        ...prevResData,
        [propertyName]: value,
      };
    });
  }

  async function handleSubmit(event) {
    setIsSubmitting(true);
    event.preventDefault();

    const reservationDetail = {
      ...resData,
      date: resDate,
    };
    const response = await submitAPI(reservationDetail);
    if (response) {
      setResDate("");
      setResData({
        firstName: "",
        lastName: "",
        email: "",
        tel: "",
        time: "",
        seating: "",
        guests: "",
        occasion: "",
        notes: "",
      });
      setIsSubmitting(false);
      navigate("/confirmed");
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="container">
        <div className="form-row">
          <div className="control">
            <label htmlFor="date">
              <h3>DATE OF VISIT*</h3>
            </label>
            <input
              type="date"
              name="date"
              id="date"
              placeholder="DD/MM/YY"
              value={resDate}
              onChange={(e) => setResDate(e.target.value)}
              required
            />
          </div>

          <div className="control">
            <label htmlFor="guests">
              <h3>NUMBER OF GUESTS*</h3>
            </label>
            <input
              type="number"
              name="guests"
              id="guests"
              placeholder="1"
              value={resData.guests}
              onChange={(e) => handleChange(e.target.value, "guests")}
              min={1}
              max={10}
              required
            />
          </div>
        </div>

        <div className="form-row">
          <div className="control">
            <label htmlFor="seating">
              <h3>SEATING OPTIONS*</h3>
            </label>
            <select
              name="seating"
              id="seating"
              value={resData.seating}
              onChange={(e) => handleChange(e.target.value, "seating")}
              required
            >
              <option value="">Select Seating</option>
              <option value="inside">Inside</option>
              <option value="outside">Outside</option>
            </select>
          </div>

          <div className="control">
            <label htmlFor="time">
              <h3>TIME*</h3>
            </label>
            <select
              name="time"
              id="time"
              value={resData.time}
              onChange={(e) => handleChange(e.target.value, "time")}
              required
            >
              <option value="">Select Time</option>
              {availableTimes.map((time) => (
                <option key={time} value={time}>
                  {time}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="form-row">
          <div className="control">
            <label htmlFor="firstName">
              <h3>FIRST NAME*</h3>
            </label>
            <input
              type="text"
              name="firstName"
              id="firstName"
              placeholder="Enter First Name"
              value={resData.firstName}
              onChange={(e) => handleChange(e.target.value, "firstName")}
              required
            />
          </div>

          <div className="control">
            <label htmlFor="lastName">
              <h3>LAST NAME*</h3>
            </label>
            <input
              type="text"
              name="lastName"
              id="lastName"
              placeholder="Enter Last Name"
              value={resData.lastName}
              onChange={(e) => handleChange(e.target.value, "lastName")}
              required
            />
          </div>
        </div>

        <div className="control full-row">
          <label htmlFor="email">
            <h3>EMAIL*</h3>
          </label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Enter Email"
            value={resData.email}
            onChange={(e) => handleChange(e.target.value, "email")}
            required
          />
        </div>

        <div className="control full-row">
          <label htmlFor="tel">
            <h3>MOBILE PHONE*</h3>
          </label>
          <input
            type="tel"
            name="tel"
            id="tel"
            placeholder="Enter Phone Number"
            value={resData.tel}
            onChange={(e) => handleChange(e.target.value, "tel")}
            required
          />
        </div>

        <div className="control full-row">
          <label htmlFor="occasion">
            <h3>SPECIAL OCCASION</h3>
          </label>
          <select
            name="occasion"
            id="occasion"
            value={resData.occasion}
            onChange={(e) => handleChange(e.target.value, "occasion")}
          >
            <option value="">Select Occasion</option>
            <option value="birthday">Birthday</option>
            <option value="engagement">Engagement</option>
            <option value="anniversary">Anniversary</option>
          </select>
        </div>

        <div className="control full-row">
          <label htmlFor="notes">
            <h3>NOTES</h3>
          </label>
          <textarea
            name="notes"
            id="notes"
            placeholder="You can write your additonal notes here..."
            rows={5}
            value={resData.notes}
            onChange={(e) => handleChange(e.target.value, "notes")}
          ></textarea>
        </div>
        <div className="control full-row">
          <p className="validation-warning">Fields with * can not be empty.</p>
        </div>
        <div className="form-actions">
          <button className="cta" disabled={(isSbmitting || isInvalid)}>
            {isSbmitting ? "Submitting..." : "Submit"}
            </button>
        </div>
      </div>
    </form>
  );
}
