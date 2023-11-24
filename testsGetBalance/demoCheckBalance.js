var { Web3 } = require("web3");
const address = '0x4aEDCf52EEDda3841D80E8A307CD3Cd4AfD2679b' // Your account address goes here
var provider = "https://goerli.infura.io/v3/300570e244f94d21a4e41e43d7fab1fe";
var web3Provider = new Web3.providers.HttpProvider(provider);
var web3 = new Web3(web3Provider);

async function getBlockNumber() {
  try{
    web3.eth.getBlockNumber().then((result) => {
    console.log("Latest Ethereum Block is ", result);
   });
  } catch (error) {
    console.error('Error:', error);
  }
}

async function getBalance() {
  try {
    const balanceWei = await web3.eth.getBalance(address);
    const balanceEther = web3.utils.fromWei(balanceWei, 'ether');
    console.log(`Balance of ${address}: ${balanceEther} ETH`);
  } catch (error) {
    console.error('Error:', error);
  }
}

getBalance();
//getBlockNumber();
