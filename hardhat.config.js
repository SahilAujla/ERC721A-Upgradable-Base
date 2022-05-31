require("@nomiclabs/hardhat-waffle");
require('dotenv').config();
require('@openzeppelin/hardhat-upgrades');
require("@nomiclabs/hardhat-etherscan");

module.exports = {
    solidity: "0.8.11",
    networks: {
        rinkeby: {
            url: process.env.RPC_URL_RINKEBY,
            accounts: [process.env.PRIVATE_KEY],
            gasPrice: 100000000000,
            gasLimit: 1000000000,
        }
    },
    etherscan: {
        // Your API key for Etherscan
        // Obtain one at https://etherscan.io/
        apiKey: process.env.ETHERSCAN_KEY,
    }
};