// SPDX-License-Identifier: GPL-3.0

pragma solidity ^0.8.3;

import "@openzeppelin/contracts/token/ERC721/utils/ERC721Holder.sol";
import "@openzeppelin/contracts/token/ERC721/IERC721.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

contract Staking is ERC721Holder {
    IERC721 public NFTItem;

    uint256 month = 2629743;
    uint256 one_year = 31556926;

    uint256 public reward;

    struct Staker {
        uint256 tokenId;
        uint256 timestamp;
    }

    mapping(address => Staker) public stakes;

    constructor(address _NFTItem) {
        NFTItem = IERC721(_NFTItem);
    }

    event Stake(address indexed owner, uint256 id, uint256 time);
    event UnStake(
        address indexed owner,
        uint256 id,
        uint256 time,
        uint256 rewardTokens
    );

    function calculateRate() internal view returns (uint256) {
        return ((15 * month) / 100) * one_year;
    }

    function stakeNFT(uint256 _tokenId) public {
        require(NFTItem.balanceOf(msg.sender) >= 1, "you dont have enough NFT");
        stakes[msg.sender] = Staker(_tokenId, block.timestamp);
        NFTItem.safeTransferFrom(msg.sender, address(this), _tokenId);
        emit Stake(msg.sender, _tokenId, block.timestamp);
    }

    function unStakeNFT(uint256 _tokenId) public {
        require(
            block.timestamp >= stakes[msg.sender].timestamp + 30 days,
            "Cannot unstake before 1 month"
        );
        NFTItem.safeTransferFrom(address(this), msg.sender, _tokenId);

        reward = calculateRate();
        emit UnStake(msg.sender, _tokenId, block.timestamp, reward);
    }
}
