import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

const API_URL = 'http://localhost:5000/api/users';

function App() {
  const [users, setUsers] = useState([]);
  const [editingUser, setEditingUser] = useState(null);
  const [newUser, setNewUser] = useState('');

  // Fetch all users on component mount
  useEffect(() => {
    axios.get(API_URL)
      .then(response => setUsers(response.data))
      .catch(error => console.error('Error fetching users:', error));
  }, []);

  // --- Event Handlers ---

  const handleCreateUser = (e) => {
    e.preventDefault();
    axios.post(API_URL, { name: newUser })
      .then(response => {
        setUsers([...users, response.data]);
        setNewUser('');
      });
  };

  const handleUpdateUser = (id) => {
    axios.put(`${API_URL}/${id}`, editingUser)
      .then(response => {
        setUsers(users.map(user => (user.id === id ? response.data : user)));
        setEditingUser(null);
      });
  };

  const handleDeleteUser = (id) => {
    axios.delete(`${API_URL}/${id}`)
      .then(() => {
        setUsers(users.filter(user => user.id !== id));
      });
  };

  // --- Render Logic ---

  return (
    <div className="App">
      <h1>User Management</h1>

      {/* Create User Form */}
      <form onSubmit={handleCreateUser}>
        <input
          type="text"
          value={newUser}
          onChange={(e) => setNewUser(e.target.value)}
          placeholder="Enter new user name"
          required
        />
        <button type="submit">Add User</button>
      </form>

      {/* Users List */}
      <ul>
        {users.map(user => (
          <li key={user.id}>
            {editingUser && editingUser.id === user.id ? (
              // Edit Mode
              <div>
                <input
                  type="text"
                  value={editingUser.name}
                  onChange={(e) => setEditingUser({ ...editingUser, name: e.target.value })}
                />
                <button onClick={() => handleUpdateUser(user.id)}>Save</button>
                <button onClick={() => setEditingUser(null)}>Cancel</button>
              </div>
            ) : (
              // View Mode
              <div>
                <span>{user.name}</span>
                <button onClick={() => setEditingUser({ ...user })}>Edit</button>
                <button onClick={() => handleDeleteUser(user.id)}>Delete</button>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;