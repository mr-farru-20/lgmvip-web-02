import React, { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import UserCard from './components/UserCard';

function App() {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const getUsers = async () => {
    setIsLoading(true);
    try {
      const response = await fetch('https://reqres.in/api/users?page=1');
      const data = await response.json();
      setUsers(data.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
    setIsLoading(false);
  };

  return (
    <div className="App">
      <Navbar onGetUsers={getUsers} />
      <div className="user-card-grid">
        {isLoading ? (
          <div className="loader">Loading...</div>
        ) : (
          users.map((user) => <UserCard key={user.id} user={user} />)
        )}
      </div>
    </div>
  );
}

export default App;
