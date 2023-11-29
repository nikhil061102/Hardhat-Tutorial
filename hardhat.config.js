require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();
const API_KEY = process.env.INFURA_SEPOLIA_KEY;
const PRIVATE_KEY = process.env.PRIVATE_KEY;

module.exports = {
  solidity: "0.8.19",
  defaultNetwork: "hardhat",
  networks: {
    hardhat : {},
    sepolia : {
      url: `https://sepolia.infura.io/v3/${API_KEY}`,
      accounts: [`0x${PRIVATE_KEY}`]
    }
  }
};