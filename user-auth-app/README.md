 npm i -g vercel 

 vercel 
 y
 n 
 project name
 enter


vercel --prod


git add .

git commit -m "Mandar"




import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    const user = { username, password };

    // Save user to localStorage
    localStorage.setItem('user', JSON.stringify(user));
    alert('Registration successful!');
    navigate('/login');
  };

  return (
    <div>
      <h2>Register</h2>
      <form onSubmit={handleRegister}>
        <div>
          <label>Username:</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Register;


git push origin main

----> changes update


git add .

git commit -m "Mandar"

git push origin main