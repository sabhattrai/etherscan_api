const express = require("express");
const axois = require("axios");

const app = express();

class Block {
  constructor(timeStamp, BlockReward) {
    this.timeStamp = timeStamp;
    this.BlockReward = BlockReward;
  }
}

app.listen(3000, () => {
  console.log("server is running");
});
