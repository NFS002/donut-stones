// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/token/ERC20/extensions/ERC20Pausable.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract DonutStone is Ownable, ERC20Pausable {
	constructor() ERC20("DonutStone", "LONER") {
		_mint(msg.sender, 1000000 * 10**decimals());
	}

	function mint(address to, uint256 amount) public onlyOwner whenNotPaused {
		_mint(to, amount);
	}
}
