const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express();
const port = 3001;
const cors = require('cors');

app.use(bodyParser.json());
app.use(cors());

mongoose.connect('mongodb+srv://qhagayla:1234@cluster0.qmrdbgo.mongodb.net/test', { useNewUrlParser: true, useUnifiedTopology: true });

const userSchema = new mongoose.Schema({
  username: String,
  password: String,
});

const User = mongoose.model('User', userSchema);

app.post('/login', async (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).json({ message: 'Username and password are required.' });
  }

  const existingUser = await User.findOne({ username, password }); // Find the user in the database

  if (existingUser) {
    return res.json({ message: 'Login successful' });
  } else {
    return res.status(401).json({ message: 'Invalid credentials.' });
  }
});

app.listen(port, () => {
  console.log(`Login and Signup server is running on port ${port}`);
});
