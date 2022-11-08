const { ethers } = require("hardhat");
const { NFT_ADDRESS } = require("./addresses");

async function main() {
	const [deployer] = await ethers.getSigners();

	const NFT = await ethers.getContractFactory("MyNft");
	const nft = await NFT.attach(NFT_ADDRESS);

	// amount in ether
	const amount = { value: ethers.utils.parseUnits("1", "ether") };
	// mint nfts
	await nft.safeMint(deployer.address, amount);
	const ownerBalance = await nft.balanceOf(deployer.address);

	console.log(`Nft token:`, ownerBalance.toString());
}

main().catch((error) => {
	console.error(error);
	process.exitCode = 1;
});
