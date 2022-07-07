import { useState } from "react";
import "./assets/css/App.css";

//Importing Dependencies
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

// context
import { GlobalContext } from "./contexts/GlobalContext";

//Components
import Navigation from "./components/Navigation/Navigation";
import Landing from "./components/Landing";
import Dashboard from "./components/Dashboard";
import Footer from "./components/Footer";
import Signup from "./components/Signup";

function App() {
  const [loggedIn, setLoggedIn] = useState<boolean>(false);
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
            </Routes>
          </main>
          <Footer />
        </GlobalContext.Provider>
      </Router>
    </div>
  );
}

export default App;
