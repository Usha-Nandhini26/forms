import React, { useState } from 'react';
import './App.css';

function App() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [userError, setUserError] = useState('');
  const [passError, setPassError] = useState('');
  

  const handleFormSubmit = (e) => {
    e.preventDefault();

    // Perform form validation
    if (username.trim() === '') {
      setUserError('Username is required');
    } else {
      setUserError('');
    }

    if (password.trim() === '') {
      setPassError('Password is required');
    } else {
      setPassError('');
    }

    // Additional validation logic 

    // Handle form submission logic
    if (username.trim() !== '' && password.trim() !== '') {
      // logic for handling form submission
      alert('Form submitted:', { username, password });
    }
  };

  return (
    <div className=" flex justify-center flex-col border border-black-2 m-60 items-center bg-gray-700 p-4">
      <h1 className="text-3xl"> LOGIN</h1>
      <form onSubmit={handleFormSubmit}>
        <div className="m-4">
          <label htmlFor="username" className="mr-2">Username</label>
          <input
          className="border border-black rounded-md bg-gray-300 "
            value={username}
            id="username"
            type="text"
            onChange={(e) => setUsername(e.target.value)}
          />
          {userError && <p className="text-red-500">{userError}</p>}
        </div>

        <div className="m-4">
          <label htmlFor="password" className="mr-3">Password</label>
          <input
          className="border border-black rounded-md bg-gray-300 "
            value={password}
            id="password"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          {passError && <p className="text-red-500">{passError}</p>}
        </div>

        <div className="flex justify-center">
          <button className="bg-red-500 text-white px-2 py-1 rounded-md">Login</button>
        </div>
      </form>
    </div>
  );
}

export default App;
