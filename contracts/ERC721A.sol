// SPDX-License-Identifier: MIT
pragma solidity ^0.8.11;

import 'erc721a-upgradeable/contracts/ERC721AUpgradeable.sol';

contract Something is ERC721AUpgradeable {
    function initialize() initializerERC721A public {
        __ERC721A_init('Something', 'SMTH');
    }

    function mint(uint256 quantity) external payable {
        // _safeMint's second argument now takes in a quantity, not a tokenId.
        _safeMint(msg.sender, quantity);
    }
}