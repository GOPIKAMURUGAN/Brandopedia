import React from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate('/home');
  };

  return (
    <div className="login">
      <h2>Login</h2>
      <input placeholder="Email" />
      <input placeholder="Password" type="password" />
      <button onClick={handleLogin}>Login</button>
      <p>Don't have an account? <a href="#">Sign up</a></p>
    </div>
  );
};

export default Login;