import { useState, useEffect } from "react";
import "./assets/css/App.css";

//Importing Dependencies
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

// context
import { GlobalContext } from "./contexts/GlobalContext";

//Components
import Navigation from "./components/Navigation/Navigation";
import Landing from "./components/Landing/Landing";
import Dashboard from "./components/Dashboard";
import Footer from "./components/Footer";
import Signup from "./components/Signup/Signup";
import Login from "./components/Login";
import Appointments from "./components/Appointments/Appointments";
import Profile from "./components/Profile/Profile";
import AddVehicle from "./components/Vehicle/AddVehicle";
import EditVehicle from "./components/Vehicle/EditVehicle";
import AppointmentDetails from "./components/Appointments/AppointmentDetails";
import Scheduling from "./components/Scheduling/Scheduling";

const { REACT_APP_API_URL } = process.env;

function App() {
  const [loggedIn, setLoggedIn] = useState<boolean>(false);
  const [selectedServices, setSelectedServices] = useState<any>([]);
  const [selectedVehicles, setSelectedVehicles] = useState<any>([]);
  const [date, setDate] = useState<Date | null>(null);
  const [time, setTime] = useState<string>("");

  useEffect(() => {
    const verifyLoggedIn = async () => {
      const response = await fetch(`${REACT_APP_API_URL}users/authorize`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      if (response.status === 200) {
        return setLoggedIn(true);
      }
    };
    verifyLoggedIn();
  }, []);

  return (
    <div className="App">
      <Router>
        <GlobalContext.Provider
          value={{
            setLoggedIn,
            selectedServices,
            setSelectedServices,
            selectedVehicles,
            setSelectedVehicles,
            date,
            setDate,
            time,
            setTime,
          }}
        >
          <Navigation loggedIn={loggedIn} />
          <main className="footer-fill">
            <Routes>
              <Route
                path="/"
                element={loggedIn ? <Dashboard /> : <Landing />}
              />
              <Route path="/signup" element={<Signup />} />
              <Route path="/login" element={<Login />} />
              <Route path="/appointments" element={<Appointments />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/vehicle/add" element={<AddVehicle />} />
              <Route path="/vehicle/edit/:id" element={<EditVehicle />} />
              <Route
                path="/appointments/:id"
                element={<AppointmentDetails />}
              />
              <Route
                path="/scheduling/service"
                element={
                  <Scheduling
                    title="Services"
                    content="service"
                    next="vehicle"
                  />
                }
              />
              <Route
                path="/scheduling/vehicle"
                element={
                  <Scheduling
                    title="Vehicles"
                    content="vehicle"
                    next="date-time"
                  />
                }
              />
              <Route
                path="/scheduling/date-time"
                element={
                  <Scheduling
                    title="Date and Time"
                    content="date-time"
                    next="payment"
                  />
                }
              />
              <Route
                path="/scheduling/payment"
                element={
                  <Scheduling
                    title="Payment"
                    content="payment"
                    next="confirmation"
                  />
                }
              />
              <Route
                path="/scheduling/confirmation"
                element={
                  <Scheduling
                    title="Confirmation"
                    content="confirmation"
                    next="submit"
                  />
                }
              />
            </Routes>
          </main>
          <Footer />
        </GlobalContext.Provider>
      </Router>
    </div>
  );
}

export default App;
