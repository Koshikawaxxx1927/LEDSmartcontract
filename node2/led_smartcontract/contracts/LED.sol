// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract LED is ERC20 {

    bool private _on_off_state;

    // define an event about the change of balances
    event BalanceUpdate(address indexed sender, address indexed receiver, uint amount);
    event ToggleUpdated(bool _on_off_state);

    constructor(string memory name, string memory symbol) ERC20(name, symbol) {
        _mint(msg.sender, 100 * 10 ** uint(decimals()));
        _on_off_state = false;
    }

    function mint(uint amount) external {
        _mint(msg.sender, amount * 10 ** uint(decimals()));
    }

    function burn(uint amount) external {
        _burn(msg.sender, amount);
    }

    function get() public view returns (bool) {
        return _on_off_state;
    }

    function toggle() public {
        require(balanceOf(msg.sender) >= 5 * 10 ** uint(decimals()));
        _burn(msg.sender, 5 * 10 ** uint(decimals()));
        _on_off_state = !_on_off_state;
        emit ToggleUpdated(_on_off_state);
    }
}