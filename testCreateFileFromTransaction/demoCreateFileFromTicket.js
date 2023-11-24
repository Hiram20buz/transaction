var { Web3 } = require("web3");
var { fs } = require('fs');
require("dotenv").config();

const network = process.env.ETHEREUM_NETWORK;
  const web3 = new Web3(
    new Web3.providers.HttpProvider(`https://${network}.infura.io/v3/${process.env.INFURA_API_KEY}`)
  );

var stringToWrite = ""
const transactionHash = '0xac1364857ff274f846ee891c530ce8462d39c62306c6843a6b3ad5efa8d84564'; // Replace with the actual transaction hash
//https://goerli.etherscan.io/tx/0xac1364857ff274f846ee891c530ce8462d39c62306c6843a6b3ad5efa8d84564?fbclid=IwAR1cSPK3VdiJM8Le33d_2qFQJ-NJ84_7BgwSMR84qcuse7C1ur75S0KKgEY

async function getTransactionDetails() {
    try {
      const transaction = await web3.eth.getTransaction(transactionHash);
      //console.log('Transaction details:', transaction);
      //console.log('Transaction data:', transaction.data);
      //console.log('Transaction data in utft8:', web3.utils.toUtf8(transaction.data));
      stringToWrite = web3.utils.toUtf8(transaction.data);
      console.log(stringToWrite);
    } catch (error) {
      console.error('Error fetching transaction:', error);
    }
  }
  getTransactionDetails()

  function decodeBase64AndWriteToFile(base64File,filePath) {
    const decodedBuffer = Buffer.from(base64File, 'base64');
    fs.writeFile(filePath, decodedBuffer, (err) => {
      if (err) {
        console.error('Error saving the file:', err);
      } else {
        console.log(`File saved at ${filePath}`);
      }
    });
  }
  
  //decodeBase64AndWriteToFile(base64Png,"testCreateFileFromTransaction/outputFiles/image.png");





