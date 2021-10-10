const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Lonely Token", () => {
  it("Should return the token name", async () => {
    const DonutStoneContract = await ethers.getContractFactory("DonutStone");
    const donutStone = await DonutStoneContract.deploy();
    await donutStone.deployed();

    expect(await donutStone.name()).to.equal("DonutStone");
  });

  it("Should return the token symbol", async () => {
    const DonutStoneContract = await ethers.getContractFactory("DonutStone");
    const donutStone = await DonutStoneContract.deploy();
    await donutStone.deployed();

    expect(await donutStone.symbol()).to.equal("⅊");
  });

  it("Should return decimals", async () => {
    const DonutStoneContract = await ethers.getContractFactory("DonutStone");
    const donutStone = await DonutStoneContract.deploy();
    await donutStone.deployed();

    expect(await donutStone.decimals()).to.equal(18);
  });

  it("Should have total supply", async () => {
    const DonutStoneContract = await ethers.getContractFactory("DonutStone");
    const donutStone = await DonutStoneContract.deploy();
    await donutStone.deployed();

    expect(await donutStone.totalSupply()).to.equal(ethers.BigNumber.from("1000000000000000000000000"));
  });
});
