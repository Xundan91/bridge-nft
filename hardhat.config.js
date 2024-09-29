require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.24",
  networks: {
    amoy: {
      url: 'https://rpc-amoy.polygon.technology/',
      accounts: ['6bc8f1b379955c58376bddcdbc4e188c7096af78b9890b731ce9e880c64de46f'],
    },
    sepolia: {
      url: 'https://sepolia.infura.io/v3/150089fa54834304a59a0e73bf5deb95',
      accounts: ['6bc8f1b379955c58376bddcdbc4e188c7096af78b9890b731ce9e880c64de46f'],
    },
  }
};
