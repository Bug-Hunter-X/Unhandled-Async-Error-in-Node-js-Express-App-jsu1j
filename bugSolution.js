const express = require('express');
const app = express();
app.get('/', (req, res) => {
  setTimeout(() => {
    try {
      // Simulate a condition that causes an error
      if (Math.random() < 0.5) {
        throw new Error('Something went wrong!');
      }
      res.send('Hello!');
    } catch (error) {
      console.error('Error:', error);
      res.status(500).send('Internal Server Error');
    }
  }, 1000);
});
app.listen(3000, () => console.log('Server listening on port 3000'));