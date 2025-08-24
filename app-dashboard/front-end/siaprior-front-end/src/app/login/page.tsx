"use client";
import { useState } from "react";

export default function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Login as ${username}`);
  };

  return (
    <div className="auth-wrap">
      <div className="auth-box">
        {/* Siaprior logo */}
        <img
          src="/siaprior-logo.png"   // make sure this file is inside /public
          alt="Siaprior Logo"
          className="logo"
        />
        <h2>Login</h2>
        <form className="form" onSubmit={onSubmit}>
          <label>Username</label>
          <input
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Enter username"
          />

          <label>Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter password"
          />

          <button className="btn" type="submit">
            Login
          </button>
        </form>
      </div>
    </div>
  );
}
