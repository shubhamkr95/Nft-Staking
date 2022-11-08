require("dotenv").config();
const { ethers } = require("ethers");
const { URL } = require("./nodeUrl");
const stackingAbi = require("./Staking.json");

const nftAddress = "0x5fbdb2315678afecb367f032d93f642f64180aa3";
const stakingAddress = "0xe7f1725e7734ce288f8367e1bb143e90bb3f0512";

exports.abi = stackingAbi.abi;

const customHttpProvider = new ethers.providers.JsonRpcProvider(URL);

exports.stakingContract = new ethers.Contract(stakingAddress, stackingAbi.abi, customHttpProvider);
