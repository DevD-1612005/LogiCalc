const mongoose = require("mongoose");

const calculationSchema = new mongoose.Schema({
  input1: {
    type: Number,
    required: true,
  },
  input2: {
    type: Number,
    required: true,
  },
  operation: {
    type: String,
    enum: ["+", "-", "*", "/"],
    required: true,
  },
  result: {
    type: Number,
    required: true,
  },
  timestamp: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Calculation", calculationSchema);
