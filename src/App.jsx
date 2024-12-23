import Header from './components/Header';
import Footer from "./components/Footer"
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/Home';
import ReservationPage from './pages/Reservation';

function App() {
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/reservations' element={<ReservationPage />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
