const { ethers } = require("hardhat");
const { STAKING_ADDRESS } = require("./addresses");

async function main() {
	const [deployer] = await ethers.getSigners();

	const STAKING = await ethers.getContractFactory("Staking");
	const staking = await STAKING.attach(STAKING_ADDRESS);

	// Stake the nft
	const stakeTx = await staking.stakeNFT(0);
	console.log(`Staking token hash`, stakeTx.hash);

	// checking the tokenId and timestamp
	const data = await staking.stakes(deployer.address);
	data.map((item) => {
		console.log(item.toString());
	});
}

main().catch((error) => {
	console.error(error);
	process.exitCode = 1;
});
