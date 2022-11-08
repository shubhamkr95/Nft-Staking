const mongoose = require("mongoose");

const stakeSchema = new mongoose.Schema({
	owner: {
		type: String,
		required: true,
		unique: true,
	},
	id: {
		type: String,
		required: true,
	},
	time: {
		type: String,
		required: true,
	},
});

const stakeData = mongoose.model("STAKE", stakeSchema);
module.exports = { stakeData };
