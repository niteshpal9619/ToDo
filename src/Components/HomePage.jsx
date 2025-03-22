import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Login from "../Components/Login";
import SignUp from "../Components/SignUp";
import "../styles/HomePage.css"
import backgroundImage from '../images/background.png';

const HomePage = () => {
  return (
    <Router>
      <div
        className="container-fluid d-flex flex-column align-items-center justify-content-center vh-100"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "cover",
          position: "relative",
        }}
        
      >
        {/* Navbar */}
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary w-100 position-absolute top-0">
          <div className="container">
            <Link className="navbar-brand text-white" style={{ fontWeight: "600", fontSize: "25px" }} to="/">TodoApp</Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link className="nav-link btn-login btn btn-outline-light me-2 px-4" to="/login">Login</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link btn-Sign btn btn-outline-light me-2 px-4" to="/signup">Sign Up</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />          
        </Routes>

        {/* Feature Cards */}
        <div className="container mt-5">
          <div className="row justify-content-center">
            <div className="col-md-3">
              <div className="card text-center shadow-lg">
                <img src="https://via.placeholder.com/150" className="card-img-top" alt="Increase Productivity" />
                <div className="card-body">
                  <h5 className="card-title">Increase Productivity</h5>
                  <p className="card-text">Stay on top of your tasks and get more done efficiently.</p>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card text-center shadow-lg">
                <img src="https://via.placeholder.com/150" className="card-img-top" alt="Time Management" />
                <div className="card-body">
                  <h5 className="card-title">Time Management</h5>
                  <p className="card-text">Plan your day effectively and never miss a deadline.</p>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card text-center shadow-lg">
                <img src="https://via.placeholder.com/150" className="card-img-top" alt="Goal Tracking" />
                <div className="card-body">
                  <h5 className="card-title">Goal Tracking</h5>
                  <p className="card-text">Set, track, and achieve your goals with ease.</p>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card text-center shadow-lg">
                <img src="https://via.placeholder.com/150" className="card-img-top" alt="Reduce Stress" />
                <div className="card-body">
                  <h5 className="card-title">Reduce Stress</h5>
                  <p className="card-text">Organize your tasks and reduce daily stress.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Router>
  );
};

export default HomePage;
