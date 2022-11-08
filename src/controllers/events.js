const { ethers } = require("ethers");
const { stakeData } = require("../models/stakeEvents");
const { unStakeData } = require("../models/unstakeEvents");
const { stakingContract } = require("../utils/contract");

exports.stake = async (req, res, next) => {
	// events
	try {
		stakingContract.on("Stake", async (owner, id, time) => {
			let info = {
				owner: owner,
				id: id.toString(),
				time: time.toString(),
			};
			const events = await stakeData.create(info);
			res.status(200).json(events);
		});

		// Db storage
	} catch (error) {
		res.status(500).send(error);
	}
};

exports.unStake = async (req, res, next) => {
	try {
		stakingContract.on("UnStake", async (owner, id, time, rewardsTokens) => {
			let info = {
				owner: owner,
				id: id.toString(),
				time: time.toString(),
				reward: rewardsTokens.toString(),
			};
			const events = await unStakeData.create(info);
			res.status(200).json(events);
		});
	} catch (error) {
		res.status(500).send(error);
	}
};
