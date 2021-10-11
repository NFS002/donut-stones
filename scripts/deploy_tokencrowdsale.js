// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// When running the script with `npx hardhat run <script>` you'll find the Hardhat
// Runtime Environment's members available in the global scope.
// eslint-disable-next-line import/no-extraneous-dependencies
const { ethers } = require("hardhat");

async function main() {
  // Hardhat always runs the compile task when running scripts with its command
  // line interface.
  //
  // If this script is run directly using `node` you may want to call compile
  // manually to make sure everything is compiled
  // await hre.run('compile');

  // We get the contract to deploy
  const DonutStoneContract = await ethers.getContractFactory("DonutStone");
  const donutStone = await DonutStoneContract.deploy();

  await donutStone.deployed();
  console.log("DonutStone deployed to:", donutStone.address);
  console.log("Name", await donutStone.name());
  console.log("Symbol", await donutStone.symbol());
  console.log("Decimals", await donutStone.decimals());
  const totalSupply = await donutStone.totalSupply();
  console.log("Total Supply", totalSupply);
  const owner = await donutStone.owner();
  console.log("Owner", owner);

  // deploy crowdsale contract
  const DonutStoneCrowdsaleContract = await ethers.getContractFactory("DonutStoneCrowdsale");
  const rate = 500; // 500 wei per token
  const donutStoneCrowdsale = await DonutStoneCrowdsaleContract.deploy(rate, owner, donutStone.address, owner);

  await donutStoneCrowdsale.deployed();
  console.log("DonutStone Crowdsale deployed to:", donutStoneCrowdsale.address);

  // approve crowdsale contract to spend 70% tokens
  await donutStone.approve(
    donutStoneCrowdsale.address,
    totalSupply.mul(ethers.BigNumber.from(70)).div(ethers.BigNumber.from(100))
  );
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
