import React, { useState } from "react";
import axios from "axios";
import "./index.css";

const Register = () => {
  const [formData, setFormData] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);

    try {
      const response = await axios.post("http://localhost:8000/auth/register", formData);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <form id="register-form" onSubmit={handleSubmit}>
        <label>Enter your username</label>
        <input id="register-input" name="username" placeholder="username" onChange={handleChange} />
        <label>Enter your password</label>
        <input id="register-input" name="password" placeholder="password" onChange={handleChange} />
        <label>Enter your firstName</label>
        <input id="register-input" name="firstName" placeholder="firstname" onChange={handleChange} />
        <label>Enter your lastName</label>
        <input id="register-input" name="lastName" placeholder="lastname" onChange={handleChange} />
        <label>Enter your Role ID</label>
        <input id="register-input" name="roleId" placeholder="roleID" onChange={handleChange} />
        <button type="submit" id="register-button">
          Register
        </button>
      </form>
    </div>
  );
};

export default Register;
