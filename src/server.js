require("dotenv").config();
const path = require("path");
const express = require("express");

const app = express();
app.use(express.json());

const listener = require("./routes/listener");

app.use("/staking/", listener);

const port = process.env.port || 8000;
app.listen(port, () => {
	console.log(`Connected to port ${port}`);
});
