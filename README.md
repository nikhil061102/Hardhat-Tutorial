`npm install hardhat`

`npx hardhat init`

install extra libraries as suggested

`npx hardhat node` for details of local blockchain

Write contracts in `contracts` folder then `cd contracts` and then `npx hardhat compile`

for testing all : `npx hardhat test`
for testing some particular file(s) : `npx hardhat test test/token2test.js`
deploy locally : `npx hardhat run scripts/deploy.js` 

***Note*** : If you are using ethers version 6 or higher, dont use `token.address`. rather use `token.target`

deploy to test network
1. make changes to hardhat.config.js for "SEPOLIA"
2. `npx hardhat run scripts/deploy.js --network sepolia`