import React from "react";

const Login = () => {
  return (
    <div>
      <form className="flex column center gap10">
        <label>Enter your username</label>
        <input name="username" placeholder="username" />
        <label>Enter your password</label>
        <input name="password" placeholder="password" />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
