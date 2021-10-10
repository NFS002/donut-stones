// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "./Crowdsale.sol";
import "./AllowanceCrowdsale.sol";

contract DonutStoneCrowdsale is Crowdsale, AllowanceCrowdsale {
	constructor(
		uint256 _rate,
		address payable _wallet,
		ERC20 _token,
		address _tokenWallet
	)
		Crowdsale(_rate, _wallet, _token)
		AllowanceCrowdsale(_tokenWallet)
	{}

	/**
	 * @dev Override parent behavior requiring
	 * @param beneficiary Token purchaser
	 * @param weiAmount Amount of wei contributed
	 */
	function _preValidatePurchase(address beneficiary, uint256 weiAmount)
		internal
		view
		override(Crowdsale)
	{
		super._preValidatePurchase(beneficiary, weiAmount);
	}

	/**
	 * @dev Overrides parent behavior by transferring tokens from wallet.
	 * @param beneficiary Token purchaser
	 * @param tokenAmount Amount of tokens purchased
	 */
	function _deliverTokens(address beneficiary, uint256 tokenAmount)
		internal
		override(Crowdsale, AllowanceCrowdsale)
	{
		super._deliverTokens(beneficiary, tokenAmount);
	}
}
