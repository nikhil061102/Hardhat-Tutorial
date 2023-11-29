`npm install hardhat`

`npx hardhat init`

install extra libraries as suggested

Write contracts in `contracts` folder then `cd contracts` and then `npx hardhat compile`

for testing : `npx hardhat test`

deploy locally : `npx hardhat run scripts/deploy.js` 

***Note*** : If you are using ethers version 6 or higher, dont use `token.address`. rather use `token.target`

deploy to test network
1. make changes to hardhat.config.js for "SEPOLIA"
2. `npx hardhat run scripts/deploy.js --network sepolia`