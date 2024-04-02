import React from "react";
import { useNavigate } from "react-router-dom";

export default function NoPage() {
  const navigate = useNavigate();
  const handleGoToHome = () => {
    navigate("/");
  };

  return (
    <div className="main-container d-flex flex-column justify-content-center align-items-center vh-100">
      <h1 className="display-4">404 - Page Not Found</h1>
      <p className="lead">
        Oops! The page you are looking for could not be found.
      </p>
      <button className="btn btn-primary" onClick={handleGoToHome}>
        Go To Home
      </button>
    </div>
  );
}
