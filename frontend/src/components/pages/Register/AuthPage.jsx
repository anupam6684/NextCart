import { useState } from "react";
import LoginPage from "./LoginPage";
import RegisterPage from "./RegisterPage";

export default function AuthPage() {
  const [activeTab, setActiveTab] = useState("login");

  return (
    <div className="container mt-5">
      {/* Tabs */}
      <div className="auth-tabs">
        <span
          className={`tab ${activeTab === "login" ? "active" : ""}`}
          onClick={() => setActiveTab("login")}
        >
          LOGIN
        </span>

        <span
          className={`tab ${activeTab === "register" ? "active" : ""}`}
          onClick={() => setActiveTab("register")}
        >
          REGISTER
        </span>
      </div>

      {/* Content */}
      {activeTab === "login" ? <LoginPage /> : <RegisterPage />}
    </div>
  );
}
