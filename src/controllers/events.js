const { ethers } = require("ethers");
const { stakingContract } = require("../utils/contract");

exports.stake = async (req, res, next) => {
	stakingContract.on("Stake", (owner, id, time) => {
		let info = {
			owner: owner,
			id: id.toString(),
			time: time.toString(),
		};
		res.status(200).json(info);
	});
};

exports.unStake = async (req, res, next) => {
	stakingContract.on("UnStake", (owner, id, time, rewardsTokens) => {
		let info = {
			owner: owner,
			id: id.toString(),
			time: time.toString(),
			reward: rewardsTokens.toString(),
		};
		res.status(200).json(info);
	});
};
