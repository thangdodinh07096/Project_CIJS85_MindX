import React from "react";
import "./LoadingPage.css";

const LoadingPage = () => {
  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{ width: "100%", height: "100vh", background: "#f4945e9c" }}
    >
      <div className="spinner-6" />
    </div>
  );
};

export default LoadingPage;
