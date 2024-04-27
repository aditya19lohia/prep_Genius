const express = require('express');
const MongoClient = require('mongodb').MongoClient;
const app = express();
const port = 3001; // Your desired port number

// Connect to your MongoDB database
MongoClient.connect('mongodb://localhost:27017', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(client => {
    const db = client.db('your_database_name'); // Replace 'your_database_name' with your actual database name

    // Define your API routes
    app.get('/api/mcqs', async (req, res) => {
      try {
        const mcqs = await db.collection('mcqs').find().toArray();
        res.json(mcqs);
      } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Internal server error' });
      }
    });

    // Start the server
    app.listen(port, () => {
      console.log(`Server running at http://localhost:${port}`);
    });
  })
  .catch(err => {
    console.error('Failed to connect to the database:', err);
    process.exit(1); // Exit the application if database connection fails
  });
