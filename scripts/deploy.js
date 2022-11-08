const { ethers } = require("hardhat");

async function main() {
	const [deployer] = await ethers.getSigners();

	console.log("Deploying contracts with the account:", deployer.address);

	console.log("Account balance:", (await deployer.getBalance()).toString());

	const NFT = await ethers.getContractFactory("MyNft");
	const nft = await NFT.deploy();
	await nft.deployed();

	console.log(`NFT address ${nft.address}`);

	const STAKING = await ethers.getContractFactory("Staking");
	const staking = await STAKING.deploy(nft.address);
	await staking.deployed();

	console.log(`Staking contract address ${staking.address}`);

	// call setApprovalForAll and add staking contract as operator
	const result = await nft.setApprovalForAll(staking.address, true);
	console.log(`Added approval`, result.hash);
}

main().catch((error) => {
	console.error(error);
	process.exitCode = 1;
});
