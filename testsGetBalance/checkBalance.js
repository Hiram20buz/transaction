var { Web3 } = require("web3");
//const address = '0x4aEDCf52EEDda3841D80E8A307CD3Cd4AfD2679b' // Your account address goes here
require("dotenv").config();

const network = process.env.ETHEREUM_NETWORK;
const web3 = new Web3(
    new Web3.providers.HttpProvider(
      `https://${network}.infura.io/v3/${process.env.INFURA_API_KEY}`,
    ),
  );

async function getBalance(walletAddress) {
  try {
    const balanceWei = await web3.eth.getBalance(walletAddress);
    const balanceEther = web3.utils.fromWei(balanceWei, 'ether');
    console.log(`Balance of ${walletAddress}: ${balanceEther} ETH`);
  } catch (error) {
    console.error('Error:', error);
  }
}
getBalance("0x4aEDCf52EEDda3841D80E8A307CD3Cd4AfD2679b");
getBalance("0x599855fd6E15A92B0Eb77453Aa483C9E6b004635");

