"use client";

export default function HomePage() {
  const containerStyle = {
    padding: "20px",
    textAlign: "center"
  };

  const titleStyle = {
    fontSize: "28px",
    fontWeight: "bold",
    marginBottom: "20px"
  };

  const subtitleStyle = {
    fontSize: "18px",
    marginBottom: "10px"
  };

  return (
    <div style={containerStyle}>
      <h1 style={titleStyle}>Welcome to the HTML5 Code Generator for MOODLE LMS</h1>
      <p style={subtitleStyle}>This is the Home Page. Tabs Generator will be here soon!</p>
    </div>
  );
}
