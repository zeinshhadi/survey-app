import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    console.log(formData);

    try {
      const response = await axios.post("http://localhost:8000/auth/login", formData);
      const roleId = response.data.user.roleId;
      console.log(response.data.token);
      const token = response.data.token;

      localStorage.setItem("authorization", token);
      if (roleId === 2) {
        navigate("/userpage");
      } else {
        navigate("/adminpage");
      }
    } catch (error) {
      console.error("Error during form submission:", error);
    }
  };

  return (
    <div>
      <form className="flex column center gap10" onSubmit={handleLogin}>
        <label>Enter your username</label>
        <input name="username" placeholder="username" onChange={handleChange} />
        <label>Enter your password</label>
        <input name="password" type="password" placeholder="password" onChange={handleChange} />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
