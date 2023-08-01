const { ethers } = require("hardhat");
require("dotenv").config();

const polygonContractAddress = '0xe21369d0696361Af633db86C8f6c654a42aC55DE'; // Replace with the Polygon FlyingCars contract address
const accountAddress = "0x7216a540A40B4f77D93DAE63CEc29752f83092b9"; // Replace with your account address

async function balance() {
  const polygonContract = await ethers.getContractAt(
    "FlyingCars",
    polygonContractAddress
  );

  const balanceOnMumbai = await polygonContract.balanceOf(accountAddress);
  console.log(`Balance of NFTs on Mumbai: ${balanceOnMumbai}`);
}

balance().catch((err) => {
  console.log(err);
});
