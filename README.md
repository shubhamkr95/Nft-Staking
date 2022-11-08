# NFT Staking

## Run locally

```
git clone https://github.com/shubhamkr95/Nft-Staking.git

cd Nft-Stacking

npm install

npx hardhat node

Run mongoDB local server in separate terminal

npx hardhat run scripts/deploy.js --network localhost

Update the address inside scripts/addresses.js

npx hardhat run script/mint.js --network localhost

npx hardhat run script/stake.js --network localhost

npx hardhat run script/unstake.js --network localhost

```

## Api Routes

```
GET - localhost:8000/staking/stake

GET - localhost:8000/staking/unstake

```
