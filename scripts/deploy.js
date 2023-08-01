const { ethers } = require("hardhat");
require("dotenv").config();

async function main() {
  // Define the contract name, symbol, and description
  const name = "FlyingCars";
  const symbol = "FC";
  const promptDesc ="A flying cars";

  const [deployer] = await ethers.getSigners();
  const deployerAddress = await deployer.getAddress();
  console.log(`Contract Deployer's address: ${deployerAddress}`);

  // Deploy the FlyingCars contract
  const FlyingCars = await ethers.getContractFactory("FlyingCars");
  const flyingCars = await FlyingCars.deploy(promptDesc, name, symbol);

  // Wait for the contract to be mined
  await flyingCars.deployed();

  // Print the contract address and transaction hash
  console.log("FlyingCars deployed to:", flyingCars.address);
  console.log("Transaction hash:", flyingCars.deployTransaction.hash);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
