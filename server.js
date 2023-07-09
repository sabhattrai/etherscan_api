const express = require("express");
const axois = require("axios");
const { default: axios } = require("axios");
const { utils } = require("ethers");
require("dotenv").config();
const app = express();
const apikey = process.env.API_KEY;
class Block {
  constructor(timeStamp, BlockReward) {
    this.timeStamp = timeStamp;
    this.BlockReward = BlockReward;
  }
}

const fetchData = async () => {
  try {
    const listofBlock = [];
    for (let blockNumber = 17464562; blockNumber < 17464566; blockNumber++) {
      const apiUrl = `https://api.etherscan.io/api?module=block&action=getblockreward&blockno=${blockNumber}&apikey=${apikey}`;
      const response = await axois.get(apiUrl);
      const timeStamp = response.data.result.timeStamp;
      const etherValue = utils.formatEther(response.data.result.blockReward);
      const block = new Block(timeStamp, etherValue);
      listofBlock.push(block);
    }
    console.log(listofBlock);
  } catch (error) {
    console.error(error);
  }
};
fetchData();

app.listen(3000, () => {
  console.log("server is running");
});
