const express = require('express');
const app = express();
const port = 3000;

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

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
