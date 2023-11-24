const { Web3 } = require("web3");
const { ETH_DATA_FORMAT, DEFAULT_RETURN_FORMAT } = require("web3");
async function main() {
  // Configuring the connection to an Ethereum node
  const network = process.env.ETHEREUM_NETWORK;
  const web3 = new Web3(
    new Web3.providers.HttpProvider(
      `https://${network}.infura.io/v3/${process.env.INFURA_API_KEY}`,
    ),
  );
  const networkId = await web3.eth.net.getId();
  // Creating a signing account from a private key
  const signer = web3.eth.accounts.privateKeyToAccount(
    process.env.SIGNER_PRIVATE_KEY,
  );
  web3.eth.accounts.wallet.add(signer);
  const gasAmount = await web3.eth
    .estimateGas({
        from: signer.address,
        to: "0x599855fd6E15A92B0Eb77453Aa483C9E6b004635",
        value: web3.utils.toWei("0.0001", "ether"),
        data: web3.utils.toHex('coinclarified.com')

      });


  // Creating the transaction object
  const tx = {
    from: signer.address,
    to: "0x599855fd6E15A92B0Eb77453Aa483C9E6b004635",
    value: web3.utils.toWei("0.0001", "ether"),
    gasPrice: gasAmount,
    gas: 21272,
    nonce: await web3.eth.getTransactionCount(signer.address),
    data: web3.utils.toHex('coinclarified.com')
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
require("dotenv").config();
main();