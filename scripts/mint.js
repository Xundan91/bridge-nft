// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
const hre = require("hardhat");
const tokenContractJSON = require("D:/bridge-nft/artifacts/contracts/MetaToken.sol/MetaPixelNFT.json");
require("dotenv").config();

const tokenAddress = "0x3F4e21988C3D1720635b94f57960c302EA960C12"; // place your erc20 contract address here
const tokenABI = tokenContractJSON.abi;
const walletAddress = "0x84a89a869577E7368745cc30582f09B82240B3b5"; // place your public address for your wallet here

async function main() {
  const imageUrls = [
    "ipfs://QmbzwpZSbr7XVzArZ5vZ59xPmXbRyfk2jn2FzZvFB4LWGu",
    "ipfs://QmSUqBDCoQE6eowmY8ryiDDd1bLqPEksrJm2yDbuc57vms",
    "ipfs://QmcmRemGxacCFXXBJerhfRg5QeJycd7tjoVQxheeWjsDPd",
    "ipfs://QmcEZhF9ecYx5W8dLWRDWMinbnKCZwX1MwFee26Ghgu2pD",
    "ipfs://Qmf4C4jBWz4GzzGC48ye2sVvCjTVAgK8q5AZTjvRN9UVhb",
  ];

  const prompts = [
    "watercolour painting of a valley with house next to a river",
    "portrait of a wizard with a long beard",
    "a dragon sitting on castle wall",
    "bowl of fruit sitting on a table",
    "hawk",
  ];

  const token = await hre.ethers.getContractAt(tokenABI, tokenAddress);

  const tx = await token.mintNft(imageUrls, prompts);
  await tx.wait();

  console.log(`You now have minted ${imageUrls.length} NFTs`);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
