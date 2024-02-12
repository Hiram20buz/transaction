const { Web3 } = require("web3");
const { ETH_DATA_FORMAT, DEFAULT_RETURN_FORMAT } = require("web3");
const fs = require('fs');
require("dotenv").config();


function encodeFile() {
  var fileInput = document.getElementById('fileInput');
  var file = fileInput.files[0];

  var reader = new FileReader();
  
  reader.onload = function(e) {
      var encodedFile = e.target.result.split(',')[1]; // Get the Base64 content
      //document.getElementById('encodedFile').innerText = 'Encoded File: ' + encodedFile;
      console.log(encodedFile);
  };

  reader.readAsDataURL(file);
}

async function sendFile(base64String) {
  // Configuring the connection to an Ethereum node
  const network = process.env.ETHEREUM_NETWORK;
  const web3 = new Web3(
    new Web3.providers.HttpProvider(
      `https://${network}.infura.io/v3/${process.env.INFURA_API_KEY}`,
    ),
  );
  
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
        data: web3.utils.toHex(base64String)

      });

  // Creating the transaction object
  const tx = {
    from: signer.address,
    to: "0x599855fd6E15A92B0Eb77453Aa483C9E6b004635",
    value: web3.utils.toWei("0.0001", "ether"),
    gasPrice: gasAmount,
    gas: 1594952,
    nonce: await web3.eth.getTransactionCount(signer.address),
    data: web3.utils.toHex(base64String)
  };
  signedTx = await web3.eth.accounts.signTransaction(tx, signer.privateKey);
  //console.log("Raw transaction data: " + signedTx.rawTransaction);
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

/*
readFile("testsEncode/inputFiles/image.png", (err, data) => {
  if (err) {
    console.error('Error:', err);
  } else {
    // Convert the binary data to a Base64 string
    const base64String = data.toString('base64');
    //console.log(base64String);
    sendFile(base64String);
  }
});
*/

//sending big files is not possible for 'request failed or timed out' message
