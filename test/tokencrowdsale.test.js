const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Lonely Token Crowdsale", () => {
  it("Should have 70% of Lonely Token tokens", async () => {
    const DonutStoneContract = await ethers.getContractFactory("DonutStone");
    const donutStone = await DonutStoneContract.deploy();
    await donutStone.deployed();

    expect(await donutStone.name()).to.equal("DonutStone");
    expect(await donutStone.symbol()).to.equal("DS");
    expect(await donutStone.decimals()).to.equal(18);
    const totalSupply = await donutStone.totalSupply();
    expect(totalSupply).to.equal(ethers.BigNumber.from("1000000000000000000000000"));
    const owner = await donutStone.owner();

    const DonutStoneCrowdsaleContract = await ethers.getContractFactory("DonutStoneCrowdsale");
    const rate = 500; // 500 wei per token
    const donutStoneCrowdsale = await DonutStoneCrowdsaleContract.deploy(rate, owner, donutStone.address, owner);

    await donutStoneCrowdsale.deployed();

    await donutStone.approve(
      donutStoneCrowdsale.address,
      totalSupply.mul(ethers.BigNumber.from(70)).div(ethers.BigNumber.from(100))
    );

    expect(await donutStoneCrowdsale.rate()).to.equal(rate);
    expect(await donutStoneCrowdsale.remainingTokens()).to.equal(ethers.BigNumber.from("700000000000000000000000"));
  });
});
