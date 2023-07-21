// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

contract LED {
    bool isOn;

    constructor() {
        isOn = false;
    }

    function get() public view returns (bool) {
        return isOn;
    }
    
    function toggle() public {
        isOn = !isOn;
    }
}