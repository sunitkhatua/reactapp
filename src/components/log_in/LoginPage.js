import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    if (username === 'admin' && password === 'Admin@123') {
      setIsLoggedIn(true);
    }
  }

  if (isLoggedIn) {
    return <Navigate to='/dashboard' />
  }else{
    console.log('You must be logged in');
  }

  return (
    <div>
      <h1>Login Page</h1>
      <form>
        <label>
          Username:
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
        </label>
        <br />
        <label>
          Password:
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </label>
        <br />
        <button type="button" onClick={handleLogin}>Log in</button>
      </form>
    </div>
  );
}

export default LoginPage;
