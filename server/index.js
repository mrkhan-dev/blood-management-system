const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config();
const port = process.env.PORT || 8000;

// middleware
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Donate4Life");
});

app.listen(port, () => {
  console.log(`Donate4Life running on prot ${port}`);
});
