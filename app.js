// index.js

const express = require('express');
const mongoose = require('mongoose');


const app = express();
const port = 3000;

connect().catch(err => console.error("Failed to connect to MongoDB:", err));

async function connect() {
  try {
    await mongoose.connect('mongodb://127.0.0.1:27017/simple-notes-db');
    console.log("Connected to MongoDB successfully");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error.message);
  }
}

app.use(express.json());

// Routes
const notesRouter = require('./routes/notes');
app.use('/api/notes', notesRouter);

app.listen(port, () => {
  console.log(`Server berjalan di http://localhost:${port}`);
});
