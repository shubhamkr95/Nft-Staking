const mongoose = require("mongoose");

const unStakeSchema = new mongoose.Schema({
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
	reward: {
		type: String,
		required: true,
	},
});

const unStakeData = mongoose.model("UNSTAKE", unStakeSchema);
module.exports = { unStakeData };
