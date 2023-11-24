var { Web3 } = require("web3");
//var { fs } = require('fs');
require("dotenv").config();

const network = process.env.ETHEREUM_NETWORK;
  const web3 = new Web3(
    new Web3.providers.HttpProvider(`https://${network}.infura.io/v3/${process.env.INFURA_API_KEY}`)
  );

async function getDataFromBlockNumber(number) {
    try{
        web3.eth.getBlock(number).then(blockResults => console.log(blockResults))
    } catch (error) {
      console.error('Error:', error);
    }
  }

  getDataFromBlockNumber("9932573")