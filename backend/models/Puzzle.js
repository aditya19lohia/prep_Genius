// puzzle.model.js
const mongoose = require('mongoose');

const puzzleSchema = new mongoose.Schema({
  title: String,
  question: String,
  answer: String // Assuming the answer is a string for simplicity
});

const Puzzle = mongoose.model('Puzzle', puzzleSchema);

module.exports = Puzzle;
