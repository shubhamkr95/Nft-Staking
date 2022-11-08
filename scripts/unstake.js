const { ethers } = require("hardhat");
const { STAKING_ADDRESS } = require("./addresses");

async function main() {
	const [deployer] = await ethers.getSigners();

	const STAKING = await ethers.getContractFactory("Staking");
	const staking = await STAKING.attach(STAKING_ADDRESS);

	// Stake the nft
	const unStakeTx = await staking.unStakeNFT(0);
	console.log(`unStaking token hash`, unStakeTx.hash);

	// Reward percent
	const reward = await staking.reward();
	console.log(`Reward`, reward.toString());
}

main().catch((error) => {
	console.error(error);
	process.exitCode = 1;
});
