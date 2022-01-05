const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const app = express();

dotenv.config();
const PORT = process.env.PORT || 5050;
app.use(cors());
app.use(express.json());

//test
app.get("/", (req, res) => {
  res.send("hello from server!");
});

app.listen(PORT, () => {
  console.log(`🚀 Server listening on ${PORT}`);
});
