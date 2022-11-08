require("dotenv").config();
const path = require("path");
const express = require("express");

const app = express();
app.use(express.json());

const transaction = require("./routes/transaction");

app.use("/staking/", transaction);

const port = process.env.port || 8000;
app.listen(port, () => {
	console.log(`Connected to port ${port}`);
});
