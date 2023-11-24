const { Web3 } = require("web3");
const { ETH_DATA_FORMAT, DEFAULT_RETURN_FORMAT } = require("web3");
require("dotenv").config();

async function sendTransaction(sender,receiver) {
  // Configuring the connection to an Ethereum node
  const network = process.env.ETHEREUM_NETWORK;
  const web3 = new Web3(
    new Web3.providers.HttpProvider(
      `https://${network}.infura.io/v3/${process.env.INFURA_API_KEY}`,
    ),
  );

  // Creating a signing account from a private key
  const signer = web3.eth.accounts.privateKeyToAccount(
    sender,
  );

  web3.eth.accounts.wallet.add(signer);
  const gasAmount = await web3.eth
    .estimateGas({
        from: signer.address,
        to: receiver,
        value: web3.utils.toWei("0.0001", "ether"),
      });

  // Creating the transaction object
  const tx = {
    from: signer.address,
    to: receiver,
    value: web3.utils.toWei("0.0001", "ether"),
    gasPrice: gasAmount,
    gas: 21000,
    nonce: await web3.eth.getTransactionCount(signer.address),
  };

  signedTx = await web3.eth.accounts.signTransaction(tx, signer.privateKey);
  console.log("Raw transaction data: " + signedTx.rawTransaction);
  // Sending the transaction to the network
  const receipt = await web3.eth
    .sendSignedTransaction(signedTx.rawTransaction)
    .once("transactionHash", (txhash) => {
      console.log(`Mining transaction ...`);
      console.log(`https://${network}.etherscan.io/tx/${txhash}`);
    });
  // The transaction is now on chain!
  console.log(`Mined in block ${receipt.blockNumber}`);
}

sendTransaction(process.env.SIGNER_PRIVATE_KEY_PRO, process.env.RECEIVER_ADDRESS); // PRO ACCOUNT
sendTransaction(process.env.SIGNER_PRIVATE_KEY_CLIENT, process.env.RECEIVER_ADDRESS);//CLIENT ACCOUNT