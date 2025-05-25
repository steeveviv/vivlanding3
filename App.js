import React from "react";

export default function App() {
  return (
    <header
      style={{
        height: "100vh",
        backgroundImage: "url('/images/viv-hero.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
      }}
    >
      <div style={{
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        padding: "2rem",
        borderRadius: "1rem",
        color: "#fff",
        maxWidth: "600px",
        textAlign: "center"
      }}>
        <h1 style={{ fontSize: "2.5rem", marginBottom: "1rem" }}>
          The Future of High-Touch Living
        </h1>
        <p style={{ fontSize: "1.2rem", marginBottom: "2rem" }}>
          Join the private beta for VIV, your global AI concierge
        </p>
        <button style={{
          backgroundColor: "#fff",
          color: "#000",
          border: "none",
          padding: "0.75rem 1.5rem",
          borderRadius: "0.5rem",
          fontSize: "1rem",
          cursor: "pointer"
        }}>
          Request Invitation
        </button>
      </div>
    </header>
  );
}
