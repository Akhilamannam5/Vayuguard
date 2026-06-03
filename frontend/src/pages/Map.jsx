import { Link } from "react-router-dom";

function Map() {
  return (
    <div style={{ display: "flex", minHeight: "100vh", background: "#f4f7fc" }}>

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
          background:"white",
          padding:"20px",
          borderRadius:"15px",
          marginBottom:"20px"
        }}>
          <h1>Air Quality Map</h1>
        </div>

        <div style={{
          height:"500px",
          background:"#dbeafe",
          borderRadius:"15px",
          display:"flex",
          justifyContent:"center",
          alignItems:"center",
          fontSize:"30px",
          fontWeight:"bold"
        }}>
          🗺 Interactive AQI Map Placeholder
        </div>

        <div style={{
          marginTop:"20px",
          background:"white",
          padding:"20px",
          borderRadius:"15px"
        }}>
          <h2>Location Details</h2>

          <p>📍 Bengaluru</p>
          <p>AQI: 82</p>
          <p>Status: Moderate</p>
        </div>

      </div>
    </div>
  );
}

export default Map;