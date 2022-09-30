// SPDX-License-Identifier: AGPL-3.0-only

pragma solidity ^0.8.4;

/// @title Hello, world!
/// @notice Use this smart contract as a public messanger
contract HelloWorld {
    /// @dev Mapping address to string message
    mapping(address => string) private _addressMessage;

    /// @dev Sets "Hello, world!" using this contract address
    constructor() {
        _setMessage(address(this), "Hello, world!");
    }

    /// @dev Call for the contract message
    function message() public view returns (string memory) {
        return _addressMessage[address(this)];
    }

    /// @dev Overload message call for an address message
    function message(address _address) public view returns (string memory) {
        return _addressMessage[_address];
    }

    /// @dev Using tx.origin guarantees account sets message
    function setMessage(string memory _message) public {
        _setMessage(tx.origin, _message);
    }

    /// @dev Sets message with no address restrictions
    function _setMessage(address _address, string memory _message) internal {
        _addressMessage[_address] = _message;
    }
}
