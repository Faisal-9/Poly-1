const { ethers } = require("hardhat");
require("dotenv").config();

async function main() {
  const contractAddress = "0x39F0239b5B0E00a6090B861FBbd9556805172e25"; // Replace with your contract address
  const contract = await ethers.getContractAt("FlyingCars", contractAddress);
  const accountAddress = "0x7216a540A40B4f77D93DAE63CEc29752f83092b9"; // Replace with the recipient account address
  const metadataURIs = [
    "https://gateway.pinata.cloud/ipfs/QmQG5yQ9sLf6Vh2eAqTXA7EJt3ffe2PsnRZ7PLeaCEpL8g?_gl=1*1ib3788*_ga*MTU2MTA2NTQ2Ni4xNjkwMzQyODA2*_ga_5RMPXG14TE*MTY5MDgxNTE4OS43LjEuMTY5MDgxNTYxNS45LjAuMA..",
    "https://gateway.pinata.cloud/ipfs/QmbWq6H6BdQAhVwjV8NJtwGo7aiy55fvqgpDRk7LcNvMSP?_gl=1*1ib3788*_ga*MTU2MTA2NTQ2Ni4xNjkwMzQyODA2*_ga_5RMPXG14TE*MTY5MDgxNTE4OS43LjEuMTY5MDgxNTYxNS45LjAuMA..",
    "https://gateway.pinata.cloud/ipfs/Qmcsnb7UHfeq5W9SvdJJzKB7s1pJSAVG378zqppK61M51Q?_gl=1*1ib3788*_ga*MTU2MTA2NTQ2Ni4xNjkwMzQyODA2*_ga_5RMPXG14TE*MTY5MDgxNTE4OS43LjEuMTY5MDgxNTYxNS45LjAuMA..",
    "https://gateway.pinata.cloud/ipfs/QmTk72s2aLSqW6sEPkPXZX3ECqgjWXi66Tqh6rWBDovu1j?_gl=1*1ib3788*_ga*MTU2MTA2NTQ2Ni4xNjkwMzQyODA2*_ga_5RMPXG14TE*MTY5MDgxNTE4OS43LjEuMTY5MDgxNTYxNS45LjAuMA..",
    "https://gateway.pinata.cloud/ipfs/Qmey3kVXTUiqpzVaaa6cEnTKahU9NweLRsMt9q6Apxai7Y?_gl=1*1ib3788*_ga*MTU2MTA2NTQ2Ni4xNjkwMzQyODA2*_ga_5RMPXG14TE*MTY5MDgxNTE4OS43LjEuMTY5MDgxNTYxNS45LjAuMA..",
  ];
  const numNFTs = 5; // Number of NFTs to mint

  for (let i = 0; i < numNFTs; i++) {
    const metadataURI = metadataURIs[i];
    console.log(`Minting NFT #${i + 1} with metadataURI: ${metadataURI}`);

    // Call the contract's mintNFT function
    const transaction = await contract.mintNFT(accountAddress, metadataURI);
    await transaction.wait();

    console.log(`NFT #${i + 1} minted successfully`);
  }
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
