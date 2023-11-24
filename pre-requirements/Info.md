## Checking Prerequisites
We need to install Node.js (we’ll go for v14.x) and the npm package manager.

Install: 
- Node js
- npm

### We can verify that everything installed correctly by querying the version for each package:
```
node -v
npm -v
```
Im using:

Node.js v20.5.1

npm 10.2.0

Next, we can create a directory to store all our relevant files , and create a simple package.json file by running:
```
mkdir transaction && cd transaction/
npm init --yes
```
With the package.json file created, we can then install the Web3 package by executing:

```
npm install --save web3
```

To verify the installed version of Web3, you can use the ls command:

```
npm ls web3
```
As of the writing of this guide, the version used was 1.2.9. Remember you can fix a version of a package by using the @ symbol, this is useful to install specific versions, for example:
```
npm install --save web3@1.2.9
```
Im using:

web3@4.2.0

## Ethereum Node Basics
To start getting information from the Ethereum blockchain, you will first have to set up a node. Follow the steps below to get started:
- An Ethereum Node is a server running the Ethereum software that verifies existing blocks and stays in sync when new blocks are mined.
- You can run your own Ethereum Node or purchase a “node-as-a-service” from companies like Ankr ($), Infura ($$$), or Alchemy ($).
- The most popular setup for running your own Ethereum Node is Geth running on AWS.
- You can make GraphQL, Websocket, or HTTP API calls to RPC nodes to receive blockchain data.
- Client libraries like Web3.js make it super easy to make API calls to a RPC node.

We will do it with Infura

## What is the limit for infura free api?
[Comparing API Limits: Infura, Alchemy, ZMOK, QuickNode
](https://zmok.io/blog/comparing-api-limits-infura-alchemy-zmok-quicknode/#:~:text=Infura%20offers%20a%20free%20tier,a%20bottleneck%20for%20larger%20ones.)


## HOW TO CREATE AN ACCOUNT ON INFURA.IO
[HOW TO CREATE AN ACCOUNT ON INFURA.IO
](https://www.youtube.com/watch?v=NcKMBgNsBuw)

Go to [Infura](https://www.infura.io/) and create an account or login.

Then, get your API key for the network you want.

For example, for etherum:
- https://mainnet.infura.io/v3/API-KEY
- https://goerli.infura.io/v3/API-KEY

## Choose a network
[Choose a network
](https://docs.infura.io/networks/ethereum/how-to/choose-a-network) 

```
Mainnet
Goerli
etc ...
```

## etherscan
[Goerli Testnet Explorer](https://goerli.etherscan.io/)

[The Ethereum Blockchain Explorer - MAINNET](https://www.infura.io/)

[Sepolia Testnet Explorer
](https://sepolia.etherscan.io/)

## How to Run code
```
node filename.js
```

## Make requests WEB3.JS
[Make requests](https://docs.infura.io/networks/ethereum/how-to/make-requests) 
```
var { Web3 } = require("web3");
var provider = "https://mainnet.infura.io/v3/<API-KEY>";
var web3Provider = new Web3.providers.HttpProvider(provider);
var web3 = new Web3(web3Provider);
web3.eth.getBlockNumber().then((result) => {
  console.log("Latest Ethereum Block is ", result);
});
```

## Get balance WEB3.JS
```
var { Web3 } = require("web3");
const address = '' // Your account address goes here
var provider = "https://goerli.infura.io/v3/<API-KEY>";
var web3Provider = new Web3.providers.HttpProvider(provider);
var web3 = new Web3(web3Provider);

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
```

## Send transaction  WEB3.JS
[Use web3.js
](https://docs.infura.io/tutorials/ethereum/send-a-transaction/use-web3.js?q=filter)

Install the dotenv package:
```
npm install dotenv --save
```
Im using: dotenv@16.3.1


### Create the .env file
Create a .env file in your project directory to store the project and Ethereum account details.
```
ETHEREUM_NETWORK = "sepolia"
INFURA_API_KEY = "<Your-API-Key>"
SIGNER_PRIVATE_KEY = "<Your-Private-Key>"
```
# Never disclose your private key. Anyone with your private keys can steal any assets held in your account.
Here is an example .env file showing the valid prefix 0x for the SIGNER_PRIVATE_KEY:
```
ETHEREUM_NETWORK = "sepolia"
INFURA_API_KEY = "d23...x...6e"
SIGNER_PRIVATE_KEY = "0x561...x...61df"
```
## Create send.js file
```
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
      });


  // Creating the transaction object
  const tx = {
    from: signer.address,
    to: "0x599855fd6E15A92B0Eb77453Aa483C9E6b004635",
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
require("dotenv").config();
main();
```



## Resources
```
Using the Ethereum Web3 Library to Send Transactions on Moonbeam
https://medium.com/moonbeam-network/using-the-ethereum-web3-library-to-send-transactions-in-moonbeam-5b8593767904

Pulling Real-Time Ethereum Transactions with Web3.js
https://medium.com/building-the-open-data-stack/pulling-real-time-ethereum-transactions-with-web3-js-f0fdcbda6b74

IPFS rate limits
https://docs.infura.io/networks/ipfs/how-to/request-rate-limits#:~:text=Authenticated%20API%20requests%E2%80%8B,api%2Fv0%2Fblock%2Fput

Choose a network
https://docs.infura.io/networks/ethereum/how-to/choose-a-network

Goerli Testnet
https://docs.etherscan.io/v/goerli-etherscan/

Make requests
https://docs.infura.io/networks/ethereum/how-to/make-requests

Use web3.js
https://docs.infura.io/tutorials/ethereum/send-a-transaction/use-web3.js?q=filter

```
