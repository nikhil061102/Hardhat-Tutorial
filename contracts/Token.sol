import "hardhat/console.sol";

// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

contract Token {
    string public name = "MyHat Token";
    string public symbol = "MHT";
    uint public totalSupply = 100000;

    address public owner;

    mapping(address => uint) balances;

    constructor() {
        balances[msg.sender] = totalSupply;
        owner = msg.sender;
    }

    function transfer(address to, uint amount) external{
        require(balances[msg.sender] >= amount, "Not enough funds !");
        console.log("**BEFORE**");
        console.log("SENDER DATA \n %s \n %s \n", msg.sender, balances[msg.sender]);
        console.log("RECIEVER DATA \n %s \n %s \n", to, balances[to]);
        
        balances[msg.sender] -= amount;
        balances[to] += amount;
        console.log("**AFTER**");
        console.log("SENDER DATA \n %s \n %s \n", msg.sender, balances[msg.sender]);
        console.log("RECIEVER DATA \n %s \n %s \n", to, balances[to]);
    }

    function balanceOf(address acc) external view returns (uint256) {
        return balances[acc];
    }
}
