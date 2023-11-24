var { Web3 } = require("web3");
//var { fs } = require('fs');
require("dotenv").config();

const network = process.env.ETHEREUM_NETWORK;
  const web3 = new Web3(
    new Web3.providers.HttpProvider(`https://${network}.infura.io/v3/${process.env.INFURA_API_KEY}`)
  );

const transactionHash = '0xb3de8089af26ac3e38b65f655a31b6397f657ef01c64ffc8e72adecede393f3a'; // Replace with the actual transaction hash

async function getTransactionDetails() {
    try {
      const transaction = await web3.eth.getTransaction(transactionHash);
      console.log('Transaction details:', transaction);
      console.log('Transaction data:', transaction.data);
      console.log('Transaction data in utft8:', web3.utils.toUtf8(transaction.data));
    } catch (error) {
      console.error('Error fetching transaction:', error);
    }
  }
  
  getTransactionDetails();
