// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract Token is ERC20 {

    // define an event about the change of balances
    event BalanceUpdate(address indexed sender, address indexed receiver, uint amount);

    modifier balanceChange(address _sender, address _receiver, uint _amount) {
        emit BalanceUpdate(_sender, _receiver, _amount);
        _;
    }

    function _afterTokenTransfer(address from,address to, uint256 amount) internal override balanceChange(from, to, amount) {
    }

    constructor(string memory name, string memory symbol) ERC20(name, symbol) {
        _mint(msg.sender, 100 * 10 ** uint(decimals()));
    }

    function mint(uint amount) external {
        _mint(msg.sender, amount);
    }

    function burn(uint amount) external {
        _burn(msg.sender, amount);
    }
}