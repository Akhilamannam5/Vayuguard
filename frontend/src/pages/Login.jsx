import "./Login.css";

function Login() {
  return (
    <div className="login-container">
      <div className="login-card">

        <h1>VAYUGUARD</h1>
        <p className="subtitle">
          Hyperlocal Air Quality Intelligence Platform
        </p>

        <input
          type="email"
          placeholder="Enter Email"
          className="input-field"
        />

        <input
          type="password"
          placeholder="Enter Password"
          className="input-field"
        />

        <button className="login-btn">
          Sign In
        </button>

        <p className="register-text">
          Don't have an account? Register
        </p>

      </div>
    </div>
  );
}

export default Login;