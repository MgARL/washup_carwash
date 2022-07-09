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
import Appointments from "./components/Appointments";
import Profile from "./components/Profile/Profile";
import AddVehicle from "./components/Vehicle/AddVehicle";
import EditVehicle from "./components/Vehicle/EditVehicle";

function App() {
  const [loggedIn, setLoggedIn] = useState<boolean>(false);

  useEffect(() => {
    const verifyLoggedIn = async () => {
      const response = await fetch("http://localhost:3001/users/authorize", {
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
        <GlobalContext.Provider value={{ setLoggedIn }}>
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
              <Route path="/vehicle/edit/:id" element={<EditVehicle/>} />
            </Routes>
          </main>
          <Footer />
        </GlobalContext.Provider>
      </Router>
    </div>
  );
}

export default App;
