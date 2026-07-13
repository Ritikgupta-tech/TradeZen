const dns = require("dns");

// DNS workaround (MongoDB Atlas)
dns.setServers(["8.8.8.8", "8.8.4.4"]);
console.log("DNS:", dns.getServers());

require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const { HoldingsModel } = require("./model/HoldingsModel");
const { PositionsModel } = require("./model/PositionsModel");
const { OrdersModel } = require("./model/OrdersModel");

const signupRoute = require("./routes/signup");
const loginRoute = require("./routes/login");


const app = express();

const PORT = process.env.PORT || 3002;
const uri = process.env.MONGO_URL;


// Middleware
app.use(cors());
app.use(express.json());


// Home Route (Render test)
app.get("/", (req, res) => {
  res.send("TradeZen Backend is Running Successfully 🚀");
});


// Routes
app.use(signupRoute);
app.use(loginRoute);


// Holdings API
app.get("/allHoldings", async (req, res) => {
  try {
    const allHoldings = await HoldingsModel.find({});
    res.json(allHoldings);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});


// Positions API
app.get("/allPositions", async (req, res) => {
  try {
    const allPositions = await PositionsModel.find({});
    res.json(allPositions);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});


// New Order API
app.post("/newOrder", async (req, res) => {
  try {

    let newOrder = new OrdersModel({
      name: req.body.name,
      qty: req.body.qty,
      price: req.body.price,
      mode: req.body.mode,
    });

    await newOrder.save();

    res.send("Order saved successfully!");

  } catch(error) {
    res.status(500).json({error:error.message});
  }
});


// MongoDB Connection + Server Start
mongoose
  .connect(uri)
  .then(() => {

    console.log("MongoDB Connected Successfully");

    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });

  })
  .catch((err) => {
    console.log("MongoDB Connection Error:", err);
  });