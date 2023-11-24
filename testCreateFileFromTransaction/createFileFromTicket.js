var { Web3 } = require("web3");
//var { fs } = require('fs');
require("dotenv").config();

const network = process.env.ETHEREUM_NETWORK;
  const web3 = new Web3(
    new Web3.providers.HttpProvider(`https://${network}.infura.io/v3/${process.env.INFURA_API_KEY}`)
  );

const transactionHash = '0xac1364857ff274f846ee891c530ce8462d39c62306c6843a6b3ad5efa8d84564'; // Replace with the actual transaction hash
//https://goerli.etherscan.io/tx/0xac1364857ff274f846ee891c530ce8462d39c62306c6843a6b3ad5efa8d84564?fbclid=IwAR1cSPK3VdiJM8Le33d_2qFQJ-NJ84_7BgwSMR84qcuse7C1ur75S0KKgEY

const util = require('util');
const fs = require('fs');
const writeFileAsync = util.promisify(fs.writeFile);

async function getTransactionDetails(transactionHash, callback, additionalArg1, additionalArg2) {
  try {
    const transaction = await web3.eth.getTransaction(transactionHash);
    const stringToWrite = web3.utils.toUtf8(transaction.data);
    //callback(null, stringToWrite);
    callback(null, stringToWrite, additionalArg1, additionalArg2);
  } catch (error) {
    callback(error, null);
  }
}

async function decodeBase64AndWriteToFile(base64File, filePath) {
  const decodedBuffer = Buffer.from(base64File, 'base64');
  try {
    await writeFileAsync(filePath, decodedBuffer);
    console.log(`File saved at ${filePath}`);
  } catch (err) {
    console.error('Error saving the file:', err);
  }
}

// Callback function to handle the result
function handleResult(error, result,filePath) {
  if (error) {
    console.error('Error:', error);
  } else {
    // Note: We're using `await` here in an async function or a Promise context
    decodeBase64AndWriteToFile(result, filePath);
  }
}

// Example usage:

// Call the function with the transaction hash and the callback
getTransactionDetails(transactionHash, handleResult, "testCreateFileFromTransaction/outputFiles/image.png");

//https://goerli.etherscan.io/tx/0x2dfa08530a0e2155397ed4a0031cb034d7c29e20db16efe71bcd3195cabc5cd9
getTransactionDetails("0x2dfa08530a0e2155397ed4a0031cb034d7c29e20db16efe71bcd3195cabc5cd9", handleResult, "testCreateFileFromTransaction/outputFiles/file.pdf");


  



