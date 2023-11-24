var { Web3 } = require("web3");
const { ETH_DATA_FORMAT, DEFAULT_RETURN_FORMAT } = require("web3");
require("dotenv").config();

const network = process.env.ETHEREUM_NETWORK;
const web3 = new Web3(
  new Web3.providers.HttpProvider(`https://${network}.infura.io/v3/${process.env.INFURA_API_KEY}`)
);

// Creating a signing account from a private key
const signer = web3.eth.accounts.privateKeyToAccount(process.env.SIGNER_PRIVATE_KEY);
console.log(signer);
console.log(signer.address);
console.log(web3.utils.toWei("0.0001", "ether"));


