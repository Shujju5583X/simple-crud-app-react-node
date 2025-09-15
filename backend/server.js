const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 5000;

// Middleware
app.use(cors()); // Allows cross-origin requests
app.use(express.json()); // Allows parsing of JSON in request body

// In-memory data store (no database needed for this simple example)
let users = [
  { id: 1, name: 'Alice' },
  { id: 2, name: 'Bob' },
];
let currentId = 2;

// --- CRUD Routes ---

// READ (Get all users)
app.get('/api/users', (req, res) => {
  res.json(users);
});

// CREATE (Add a new user)
app.post('/api/users', (req, res) => {
  const { name } = req.body;
  if (!name) {
    return res.status(400).json({ error: 'Name is required' });
  }
  currentId += 1;
  const newUser = { id: currentId, name };
  users.push(newUser);
  res.status(201).json(newUser);
});

// UPDATE (Edit an existing user)
app.put('/api/users/:id', (req, res) => {
  const { id } = req.params;
  const { name } = req.body;
  const user = users.find(u => u.id === parseInt(id));

  if (!user) {
    return res.status(404).json({ error: 'User not found' });
  }

  user.name = name;
  res.json(user);
});

// DELETE (Remove a user)
app.delete('/api/users/:id', (req, res) => {
  const { id } = req.params;
  users = users.filter(u => u.id !== parseInt(id));
  res.status(204).send(); // No content to send back
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});