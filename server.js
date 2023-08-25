const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');
const port = 3000;

app.use(bodyParser.json());

// Dummy person data
const dummyPerson = {
  name: 'John Doe',
  age: 30,
  occupation: 'Engineer'
};
const welcomeMessage = {
  welcome: 'Welcome to this demo server haha',
  
};

// API endpoint for /persons
app.get('/persons', (req, res) => {
  res.json(dummyPerson);
});
app.get('/', (req, res) => {
  res.json(welcomeMessage);
});

const users = [];
app.get('/users', async (req, res) => {
  try {
    const pass = 'myPass';
    const hashedPassword = await bcrypt.hash(pass, 10); // Hash the password
    const user =  { name: 'Abdur Rahim', password: hashedPassword }
    // Store the user data (you might want to use a database in a real application)
    

    res.json({ message: 'User getting successfully', user: user });
  } catch (error) {
    res.status(500).json({ error: 'An error occurred' });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
