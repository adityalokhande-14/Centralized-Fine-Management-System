import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { login } from '../api/authApi';

const Login = () => {
  const [credentials, setCredentials] = useState({ username: '', password: '' });
  const navigate = useNavigate();

  const handleLogin = async () => {
    const response = await login(credentials);
    if (response.role === 'admin') navigate('/admin');
    else navigate('/user');
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <input type="text" placeholder="Username" onChange={(e) => setCredentials({...credentials, username: e.target.value})} />
      <input type="password" placeholder="Password" onChange={(e) => setCredentials({...credentials, password: e.target.value})} />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;
