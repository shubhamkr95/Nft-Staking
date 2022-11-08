const mongoose = require("mongoose");

const DB = "mongodb://127.0.0.1:27017/wallet";

const dbConnect = mongoose.connect(DB).then(() => console.log("DB connection successful!"));

module.exports = { dbConnect };
