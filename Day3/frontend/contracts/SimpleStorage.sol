pragma solidity ^0.5.0;

contract SimpleStorage {
    uint256 storedData;

    function setData(uint256 x) public {
        storedData = x;
    }

    function getData() public view returns (uint256) {
        return storedData;
    }
}
