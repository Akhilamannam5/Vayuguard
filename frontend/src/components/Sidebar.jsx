import { Link } from "react-router-dom";
import "./Sidebar.css";

function Sidebar() {
  return (
    <div className="sidebar">

      <h1 className="logo">VAYUGUARD</h1>

      <Link to="/dashboard" className="nav-link">
        Dashboard
      </Link>

      <Link to="/forecast" className="nav-link">
        Forecast
      </Link>

      <Link to="/map" className="nav-link">
        AQI Map
      </Link>

      <Link to="/alerts" className="nav-link">
        Alerts
      </Link>

      <Link to="/profile" className="nav-link">
        Profile
      </Link>

    </div>
  );
}

export default Sidebar;