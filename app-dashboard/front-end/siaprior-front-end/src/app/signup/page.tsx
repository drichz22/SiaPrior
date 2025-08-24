"use client";
import { useState } from "react";

export default function SignupPage() {
  const [form, setForm] = useState({
    username: "",
    fullname: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Sign up as ${form.username}`);
  };

  return (
    <div className="auth-wrap">
      <div className="auth-box">
        {/* Siaprior logo */}
        <img
          src="/siaprior-logo.png"   // same image path
          alt="Siaprior Logo"
          className="logo"
        />
        <h2>Sign Up</h2>
        <form className="form" onSubmit={onSubmit}>
          <label>Username</label>
          <input
            name="username"
            value={form.username}
            onChange={onChange}
            placeholder="Enter username"
          />

          <label>Full Name</label>
          <input
            name="fullname"
            value={form.fullname}
            onChange={onChange}
            placeholder="Enter full name"
          />

          <label>Email</label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={onChange}
            placeholder="Enter email"
          />

          <label>Password</label>
          <input
            type="password"
            name="password"
            value={form.password}
            onChange={onChange}
            placeholder="Enter password"
          />

          <label>Confirm Password</label>
          <input
            type="password"
            name="confirmPassword"
            value={form.confirmPassword}
            onChange={onChange}
            placeholder="Confirm password"
          />

          <button className="btn" type="submit">
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
}
