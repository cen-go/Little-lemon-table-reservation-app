import Header from './components/Header';
import Footer from "./components/Footer"
import { Route, Routes } from 'react-router-dom';
import { useEffect, useReducer, useState } from 'react';
import HomePage from './pages/Home';
import ReservationPage from './pages/Reservation';
import { setStore, fetchAPI } from './API';
import ConfirmationPage from './pages/Confirmation';

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
  if (action.type === "initialize times") {
    return action.payload.availableTimes;
  }
  return workingHours;
}

function App() {
  const [ resDate, setResDate] = useState("");
  const [availableTimes, dispatch] = useReducer(availableTimesReducer, workingHours);

  useEffect(() => {
    setStore();
  }, []);

  useEffect(() => {
    const fetchedTimes = fetchAPI(resDate);
    initializeTimes(fetchedTimes);
  }, [resDate]);

  function initializeTimes(fetchedTimes) {
    dispatch({type: "initialize times", payload: {availableTimes: fetchedTimes}});
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
                availableTimes={availableTimes}
                resDate={resDate}
                setResDate={setResDate}
              />
            }
          />
          <Route path='/confirmed' element={<ConfirmationPage />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
