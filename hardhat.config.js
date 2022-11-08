require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
	solidity: "0.8.3",
	defaultNetwork: "hardhat",
	networks: {
		hardhat: {},
	},
};
