"use client";
import { useState, useEffect } from "react";

export default function RootLayout({ children }) {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) setTheme(savedTheme);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  const headerStyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "10px",
    backgroundColor: theme === "light" ? "#f0f0f0" : "#333",
    color: theme === "light" ? "#000" : "#fff"
  };

  const footerStyle = {
    textAlign: "center",
    padding: "10px",
    backgroundColor: theme === "light" ? "#f0f0f0" : "#333",
    color: theme === "light" ? "#000" : "#fff",
    marginTop: "20px"
  };

  const menuButtonStyle = {
    background: "none",
    border: "none",
    fontSize: "20px",
    cursor: "pointer",
    color: theme === "light" ? "#000" : "#fff"
  };

  return (
    <html lang="en">
      <body style={{ margin: "0", backgroundColor: theme === "light" ? "#fff" : "#111", color: theme === "light" ? "#000" : "#fff", minHeight: "100vh", display: "flex", flexDirection: "column" }}>
        {/* HEADER */}
        <header style={headerStyle}>
          <span style={{ fontWeight: "bold" }}>Student No: 123456</span>
          <div>
            <button style={menuButtonStyle}>☰</button>
            <button style={{ ...menuButtonStyle, marginLeft: "10px" }} onClick={toggleTheme}>
              {theme === "light" ? "🌙" : "☀️"}
            </button>
          </div>
        </header>

        {/* MAIN CONTENT */}
        <main style={{ flex: "1" }}>{children}</main>

        {/* FOOTER */}
        <footer style={footerStyle}>
          © Your Name | Student No: 123456 | {new Date().toLocaleDateString()}
        </footer>
      </body>
    </html>
  );
}
