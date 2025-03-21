import React from "react";
import "../styles/HomePage.css"

const HomePage = () => {
  return (
    <div>
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container">
          <a className="navbar-brand text-white" href="/">MyApp</a>
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
                <a className="nav-link btn btn-outline-light me-2 px-4 custom-hover" href="/login">Login</a>
              </li>
              <li className="nav-item">
                <a className="nav-link btn btn-light text-primary px-4 custom-hover" href="/signup">Sign Up</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="container text-center mt-5">
        <div className="row justify-content-center">
          <div className="col-md-8">
            <h1 className="display-4">Welcome to MyApp</h1>
            <p className="lead">
              Build amazing applications with ease. Sign up today and get started!
            </p>
            <a className="btn btn-primary btn-lg" href="/get-started">Get Started</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;