import React from "react";
import "../styles/HomePage.css"
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Login from "../Components/Login";
import SignUp from "../Components/SignUp";

const HomePage = () => {
  return (
    <Router>
      <div>
        {/* Navbar */}
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
          <div className="container">
            <Link className="navbar-brand text-white" to="/">MyApp</Link>
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
                  <Link className="nav-link btn btn-outline-light me-2 px-4 custom-hover" to="/login">Login</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link btn btn-light text-primary px-4 custom-hover" to="/signup">Sign Up</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        {/* Routes */}
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/" element={
            <div className="container text-center mt-5">
              <div className="row justify-content-center">
                <div className="col-md-8">
                  <h1 className="display-4">Welcome to MyApp</h1>
                  <p className="lead">
                    Build amazing applications with ease. Sign up today and get started!
                  </p>
                  <Link className="btn btn-primary btn-lg" to="/get-started">Get Started</Link>
                </div>
              </div>
            </div>
          } />
        </Routes>
      </div>
    </Router>
  );
};

export default HomePage;