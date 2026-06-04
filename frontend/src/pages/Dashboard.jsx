import { useEffect, useState } from "react";

function Dashboard() {
  const [aqiData, setAqiData] = useState(null);

  useEffect(() => {
    fetch("http://localhost:5000/api/aqi")
      .then((res) => res.json())
      .then((data) => setAqiData(data))
      .catch((err) => console.log(err));
  }, []);

  if (!aqiData) {
    return <h2>Loading AQI Data...</h2>;
  }

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#f4f7fb",
        padding: "30px",
      }}
    >
      <h1
        style={{
          color: "#1e3c72",
          marginBottom: "30px",
        }}
      >
        Air Quality Dashboard
      </h1>

      <h3>City: {aqiData.city}</h3>

      <div
        style={{
          display: "flex",
          gap: "20px",
          flexWrap: "wrap",
          marginTop: "20px",
        }}
      >
        <div
          style={{
            background: "#ffffff",
            padding: "20px",
            borderRadius: "15px",
            width: "220px",
            boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
          }}
        >
          <h3>Current AQI</h3>
          <h1>{aqiData.aqi}</h1>
        </div>

        <div
          style={{
            background: "#ffffff",
            padding: "20px",
            borderRadius: "15px",
            width: "220px",
            boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
          }}
        >
          <h3>Status</h3>
          <h1>{aqiData.status}</h1>
        </div>

        <div
          style={{
            background: "#ffffff",
            padding: "20px",
            borderRadius: "15px",
            width: "220px",
            boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
          }}
        >
          <h3>PM2.5</h3>
          <h1>{aqiData.pm25}</h1>
        </div>

        <div
          style={{
            background: "#ffffff",
            padding: "20px",
            borderRadius: "15px",
            width: "220px",
            boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
          }}
        >
          <h3>PM10</h3>
          <h1>{aqiData.pm10}</h1>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;