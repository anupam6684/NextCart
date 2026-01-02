import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

export default function LoginPage() {
  const [loginData, setLoginData] = useState({
    username: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Login Data:", loginData);
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        {/* SAME SIZE AS REGISTER */}
        <div className="col-md-6 border">
          <h4 className="text-center my-4">Login</h4>

          <form onSubmit={handleSubmit}>
            <div className="mb-3 mx-5">
              <label>User Name *</label>
              <input
                type="text"
                name="username"
                value={loginData.username}
                onChange={handleChange}
                className="form-control"
                required
              />
            </div>

            <div className="mb-3 mx-5 position-relative">
              <label>Password *</label>
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                value={loginData.password}
                onChange={handleChange}
                className="form-control pe-5"
                required
              />
              <i
                className={`bi ${
                  showPassword ? "bi-eye-slash" : "bi-eye"
                } position-absolute top-50 end-0 translate-middle-y me-3`}
                style={{ cursor: "pointer" }}
                onClick={() => setShowPassword(!showPassword)}
              ></i>
            </div>

            <button type="submit" className="btn btn-primary w-100 my-2 ">
              LOGIN
            </button>

            <div className="text-center my-3">
              <span className="text-muted">
                —————————— Or login with ——————————
              </span>
            </div>

            <div className="d-flex justify-content-center gap-3 my-5">
              <button type="button" className="btn btn-outline-danger">
                <i className="bi bi-google me-2"></i>Google
              </button>
              <button type="button" className="btn btn-outline-primary">
                <i className="bi bi-facebook me-2"></i>Facebook
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
