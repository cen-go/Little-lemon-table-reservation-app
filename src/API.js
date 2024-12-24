const initialTimes = [
  "12:00",
  "13:00",
  "14:00",
  "15:00",
  "16:00",
  "17:00",
  "18:00",
  "19:00",
  "20:00",
  "21:00",
];

const bookingsByDate = {};
const bookings = [];

export function setStore() {
  if(!localStorage.getItem("bookingsByDate")) {
    localStorage.setItem("bookingsByDate", JSON.stringify(bookingsByDate));
  }
  if(!localStorage.getItem("bookings")) {
    localStorage.setItem("bookings", JSON.stringify(bookings));
  }
}

export function submitAPI(bookingData) {
  const activeBookings = JSON.parse(localStorage.getItem("bookingsByDate"));
  if(activeBookings[bookingData.date]) {
    activeBookings[bookingData.date].push(bookingData.time);
  } else {
    activeBookings[bookingData.date] = [bookingData.time];
  }
  localStorage.setItem("bookingsByDate", JSON.stringify(activeBookings));

  const allBookings = JSON.parse(localStorage.getItem("bookings"));
  allBookings.push(bookingData);
  localStorage.setItem("bookings", JSON.stringify(allBookings));
}

export function fetchAPI(date) {
  const activeBookings = JSON.parse(localStorage.getItem("bookingsByDate"));
  let availableTimes = [];
  if (activeBookings[date]) {
    availableTimes = initialTimes.filter(time => !activeBookings[date].includes(time));
  } else {
    availableTimes = initialTimes;
  }
  return availableTimes;
}