require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const Calculation = require("./models/calculations.js");

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Connection
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("✅ MongoDB Connected"))
  .catch((err) => console.error("❌ MongoDB Connection Error:", err));

// Test Route
app.get("/", (req, res) => {
  res.send("LogiCalc Backend Running");
});

// GET: Fetch Calculation History
app.get("/calculations", async (req, res) => {
  try {
    const data = await Calculation.find().sort({ timestamp: -1 }); // newest first
    res.json(data);
  } catch (err) {
    res.status(500).json({ message: "Error fetching calculations" });
  }
});
// DELETE all calculations
app.delete("/calculations", async (req, res) => {
  try {
    await Calculation.deleteMany({});
    res.status(200).json({ message: "History cleared" });
  } catch (err) {
    res.status(500).json({ message: "Error deleting history" });
  }
});


// POST: Perform and Save Calculation
app.post("/calculate", async (req, res) => {
  const { input1, input2, operation } = req.body;

  if (input1 == null || input2 == null || !operation) {
    return res.status(400).json({ message: "Missing inputs or operation" });
  }

  let result;
  switch (operation) {
    case "+":
      result = input1 + input2;
      break;
    case "-":
      result = input1 - input2;
      break;
    case "*":
      result = input1 * input2;
      break;
    case "/":
      result = input2 !== 0 ? input1 / input2 : "Error: Divide by zero";
      break;
    default:
      return res.status(400).json({ message: "Invalid operation" });
  }

  try {
    const calc = new Calculation({
      input1,
      input2,
      operation,
      result,
    });

    await calc.save();
    res.status(201).json({ result });
  } catch (err) {
    res.status(500).json({ message: "Failed to save calculation" });
  }
});

// Start Server
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});

