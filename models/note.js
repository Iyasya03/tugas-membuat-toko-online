// models/note.js

const mongoose = require('mongoose');

const noteSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  content: String,
});

module.exports = mongoose.model('Note', noteSchema);
