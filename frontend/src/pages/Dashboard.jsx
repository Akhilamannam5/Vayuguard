import { Link } from "react-router-dom";

function Dashboard() {
  return (
    <div
      style={{
        display: "flex",
        minHeight: "100vh",
        background: "#f4f7fc",
      }}
    >
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

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "25px",
            marginTop: "50px",
          }}
        >
          <Link
            to="/dashboard"
            style={{ color: "white", textDecoration: "none" }}
          >
            Dashboard
          </Link>

          <Link
            to="/forecast"
            style={{ color: "white", textDecoration: "none" }}
          >
            Forecast
          </Link>

          <Link
            to="/map"
            style={{ color: "white", textDecoration: "none" }}
          >
            AQI Map
          </Link>

          <Link
            to="/alerts"
            style={{ color: "white", textDecoration: "none" }}
          >
            Alerts
          </Link>

          <Link
            to="/profile"
            style={{ color: "white", textDecoration: "none" }}
          >
            Profile
          </Link>
        </div>
      </div>

      {/* Main Content */}
      <div style={{ flex: 1, padding: "20px" }}>
        {/* Header */}
        <div
          style={{
            background: "white",
            padding: "20px",
            borderRadius: "15px",
            marginBottom: "25px",
            boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
          }}
        >
          <h1>Air Quality Dashboard</h1>
        </div>

        {/* AQI Cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: "20px",
          }}
        >
          <div
            style={{
              background: "white",
              padding: "25px",
              borderRadius: "15px",
              boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
            }}
          >
            <h3>Current AQI</h3>
            <h1>82</h1>
          </div>

          <div
            style={{
              background: "white",
              padding: "25px",
              borderRadius: "15px",
              boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
            }}
          >
            <h3>Status</h3>
            <h1>Moderate</h1>
          </div>

          <div
            style={{
              background: "white",
              padding: "25px",
              borderRadius: "15px",
              boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
            }}
          >
            <h3>PM2.5</h3>
            <h1>45</h1>
          </div>

          <div
            style={{
              background: "white",
              padding: "25px",
              borderRadius: "15px",
              boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
            }}
          >
            <h3>PM10</h3>
            <h1>62</h1>
          </div>
        </div>

        {/* AQI Graph */}
        <div
          style={{
            background: "white",
            padding: "20px",
            borderRadius: "15px",
            marginTop: "25px",
            boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
          }}
        >
          <h2>AQI Trend Graph</h2>

          <div
            style={{
              height: "250px",
              display: "flex",
              alignItems: "flex-end",
              justifyContent: "space-around",
              marginTop: "20px",
            }}
          >
            <div
              style={{
                width: "50px",
                height: "120px",
                background: "#4CAF50",
                borderRadius: "8px",
              }}
            ></div>

            <div
              style={{
                width: "50px",
                height: "150px",
                background: "#2196F3",
                borderRadius: "8px",
              }}
            ></div>

            <div
              style={{
                width: "50px",
                height: "180px",
                background: "#FFC107",
                borderRadius: "8px",
              }}
            ></div>

            <div
              style={{
                width: "50px",
                height: "130px",
                background: "#FF5722",
                borderRadius: "8px",
              }}
            ></div>

            <div
              style={{
                width: "50px",
                height: "200px",
                background: "#9C27B0",
                borderRadius: "8px",
              }}
            ></div>
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "space-around",
              marginTop: "10px",
            }}
          >
            <span>Mon</span>
            <span>Tue</span>
            <span>Wed</span>
            <span>Thu</span>
            <span>Fri</span>
          </div>
        </div>

        {/* Bottom Section */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "20px",
            marginTop: "25px",
          }}
        >
          {/* Alerts */}
          <div
            style={{
              background: "white",
              padding: "20px",
              borderRadius: "15px",
              boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
            }}
          >
            <h2>Recent Alerts</h2>

            <p>⚠ AQI Rising</p>
            <p>😷 Wear Mask</p>
            <p>🚫 Avoid Outdoor Activity</p>
            <p>💨 High PM2.5 Detected</p>
          </div>

          {/* Forecast */}
          <div
            style={{
              background: "white",
              padding: "20px",
              borderRadius: "15px",
              boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
            }}
          >
            <h2>Today's Forecast</h2>

            <p>🌅 Morning AQI: 75</p>
            <p>☀ Afternoon AQI: 88</p>
            <p>🌙 Evening AQI: 95</p>

            <div
              style={{
                background: "#fff3cd",
                padding: "10px",
                borderRadius: "8px",
                marginTop: "15px",
              }}
            >
              Air quality may worsen during evening hours.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;