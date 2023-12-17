import React from "react";
import "./index.css";
const Register = () => {
  return (
    <div>
      <form className="flex column center gap10">
        <label>Enter your username</label>
        <input name="username" placeholder="username" />
        <label>Enter your password</label>
        <input name="password" placeholder="password" />
        <label>Enter your firstName</label>
        <input name="firstName" placeholder="firstname" />
        <label>Enter your lastName</label>
        <input name="lastName" placeholder="lastname" />
        <label>Enter your Role ID </label>
        <input name="roleId" placeholder="roleID" />
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Register;
