import Header from './components/Header';
import Footer from "./components/Footer"
import { Route, Routes } from 'react-router-dom';
import { useReducer, useState } from 'react';
import HomePage from './pages/Home';
import ReservationPage from './pages/Reservation';

const workingHours = [
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

function availableTimesReducer(state, action) {
  if (action.type === "update times") {
    if (state.bookedTimes[action.payload.date]) {
      return {
        bookedTimes: {
          ...state.bookedTimes,
          [action.payload.date]: [
            ...state.bookedTimes[action.payload.date],
            action.payload.time,
          ],
        },
        availableTimes: [...state.availableTimes],
      }
    } else {
      return {
        bookedTimes: {
          ...state.bookedTimes,
          [action.payload.date]: [action.payload.time],
        },
        availableTimes: [...state.availableTimes],
      };
    }
  }
  if (action.type === "initialize times") {
    if (state.bookedTimes[action.payload.date]) {
      return {
        bookedTimes: {
          ...state.bookedTimes,
        },
        availableTimes: workingHours.filter(
          (time) => !state.bookedTimes[action.payload.date].includes(time)
        ),
      };
    } else {
      return {
        bookedTimes: {
          ...state.bookedTimes,
        },
        availableTimes: workingHours,
      };
    }
  }
  return workingHours;
}

function App() {
  const [ resDate, setResDate] = useState("");
  const [availableTimes, dispatch] = useReducer(
    availableTimesReducer,
    {
      bookedTimes: {},
      availableTimes: workingHours,
    }
  );

  function updateTimes(time) {
    dispatch({type: "update times", payload: {date: resDate, time: time}});
  }

  function initializeTimes(date) {
    dispatch({type: "initialize times", payload: {date: date}});
  }

  function handleDateChange(event) {
    setResDate(event.target.value);
    initializeTimes(event.target.value);
    console.log(availableTimes.bookedTimes);
  }

  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route
            path="/reservations"
            element={
              <ReservationPage
                availableTimes={availableTimes.availableTimes}
                resDate={resDate}
                handleDateChange={handleDateChange}
                updateTimes={updateTimes}
                setResDate={setResDate}
              />
            }
          />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
