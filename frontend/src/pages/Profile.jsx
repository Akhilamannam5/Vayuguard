import { Link } from "react-router-dom";

function Profile() {
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
          marginBottom:"25px"
        }}>
          <h1>User Profile</h1>
        </div>

        <div style={{
          background:"white",
          padding:"30px",
          borderRadius:"15px",
          maxWidth:"600px"
        }}>

          <h2>Akhila Mannam</h2>

          <p>📧 akhila@example.com</p>
          <p>📍 Bengaluru</p>
          <p>🌍 Preferred AQI Region: Karnataka</p>

          <button
            style={{
              marginTop:"20px",
              padding:"12px 25px",
              border:"none",
              borderRadius:"8px",
              background:"#001a3d",
              color:"white",
              cursor:"pointer"
            }}
          >
            Edit Profile
          </button>

        </div>

      </div>
    </div>
  );
}

export default Profile;