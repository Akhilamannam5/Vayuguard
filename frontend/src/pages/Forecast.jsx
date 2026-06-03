import { Link } from "react-router-dom";

function Forecast() {
  return (
    <div style={{ display: "flex", minHeight: "100vh", background: "#f4f7fc" }}>

      {/* Sidebar */}
      <div
        style={{
          width: "250px",
          background: "#001a3d",
          color: "white",
          padding: "30px",
        }}
      >
        <h1>VAYUGUARD</h1>

        <div style={{ display: "flex", flexDirection: "column", gap: "25px", marginTop: "50px" }}>
          <Link to="/dashboard" style={{ color: "white", textDecoration: "none" }}>Dashboard</Link>
          <Link to="/forecast" style={{ color: "white", textDecoration: "none" }}>Forecast</Link>
          <Link to="/map" style={{ color: "white", textDecoration: "none" }}>AQI Map</Link>
          <Link to="/alerts" style={{ color: "white", textDecoration: "none" }}>Alerts</Link>
          <Link to="/profile" style={{ color: "white", textDecoration: "none" }}>Profile</Link>
        </div>
      </div>

      <div style={{ flex: 1, padding: "20px" }}>

        <div style={{
          background: "white",
          padding: "20px",
          borderRadius: "15px",
          marginBottom: "25px"
        }}>
          <h1>7 Day AQI Forecast</h1>
        </div>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(7,1fr)",
          gap: "15px"
        }}>

          {[
            ["Mon",75],
            ["Tue",82],
            ["Wed",90],
            ["Thu",68],
            ["Fri",85],
            ["Sat",92],
            ["Sun",70]
          ].map((day,index)=>(
            <div key={index}
              style={{
                background:"white",
                padding:"20px",
                textAlign:"center",
                borderRadius:"12px",
                boxShadow:"0 2px 10px rgba(0,0,0,0.1)"
              }}
            >
              <h3>{day[0]}</h3>
              <h1>{day[1]}</h1>
            </div>
          ))}
        </div>

        <div style={{
          marginTop:"30px",
          background:"white",
          padding:"20px",
          borderRadius:"15px"
        }}>
          <h2>Forecast Insights</h2>

          <p>✔ Air quality remains moderate this week.</p>
          <p>✔ Saturday expected to have highest AQI.</p>
          <p>✔ Outdoor activity recommended during mornings.</p>
        </div>

      </div>
    </div>
  );
}

export default Forecast;