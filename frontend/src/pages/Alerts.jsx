import { Link } from "react-router-dom";

function Alerts() {
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
          borderRadius:"15px"
        }}>
          <h1>Air Quality Alerts</h1>
        </div>

        <div style={{ marginTop:"25px" }}>

          <div style={{
            background:"#ffe5e5",
            padding:"20px",
            marginBottom:"15px",
            borderRadius:"10px"
          }}>
            ⚠ AQI Rising Rapidly
          </div>

          <div style={{
            background:"#fff3cd",
            padding:"20px",
            marginBottom:"15px",
            borderRadius:"10px"
          }}>
            😷 Wear Mask Outdoors
          </div>

          <div style={{
            background:"#d1ecf1",
            padding:"20px",
            borderRadius:"10px"
          }}>
            💨 PM2.5 Level Above Safe Limit
          </div>

        </div>

      </div>
    </div>
  );
}

export default Alerts;