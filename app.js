import './App.css';
import { BrowserRouter as Router, Routes, Route, NavLink } from "react-router-dom";
import { useEffect } from "react";
import Home from "./Home";
import Register from "./Register";
import Service from "./Service";
import Profile from "./Profile";
import Transaction from "./transaction";


function App() {
  useEffect(() => {
    document.title = "Bank Application"; // Set page title
  }, []);

  return (
    <Router>
      <div className="container">
        <header>
          <h1>🏦Simple Bank Application</h1>
          <nav>
            <ul>
              <li><NavLink to="/" activeClassName="active">Home</NavLink></li>
              <li><NavLink to="/register" activeClassName="active">Register</NavLink></li>
              <li><NavLink to="/service" activeClassName="active">Services</NavLink></li>
              <li><NavLink to="/profile" activeClassName="active">Profile</NavLink></li>
              <li><NavLink to="/transaction" activeClassName="active">Transactions</NavLink></li>
            </ul>
          </nav>
        </header>

        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/register" element={<Register />} />
            <Route path="/service" element={<Service />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/transaction" element={<Transaction />} />
           
          </Routes>
        </main>

        <footer>
          <p>&copy; 2025 Bank Application | All rights reserved</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;
