# transaction
transaction web3 etherum

npm i

npm list
## You need to create an account ON INFURA.IO
[HOW TO CREATE AN ACCOUNT ON INFURA.IO
](https://www.youtube.com/watch?v=NcKMBgNsBuw)

Go to [Infura](https://www.infura.io/) and create an account or login.

Then, get your API key for the network you want.

For example, for etherum:
- https://mainnet.infura.io/v3/API-KEY
- https://goerli.infura.io/v3/API-KEY
## You need to create .env file
Example:
```
nano .env
```
```
ETHEREUM_NETWORK = "goerli"
INFURA_API_KEY = "your-api-key"
SIGNER_PRIVATE_KEY_PRO = "any-wallet"
SIGNER_PRIVATE_KEY_CLIENT = "any-wallet""
RECEIVER_ADDRESS = "any-wallet""
```
## Run a test
```
node testsGetBalance/checkBalance.js
```

## You can send a file through a transaction on the ethereum blockchain 
```
node testsSendFileFromTransaction/sendFile.js
```
<img width="1198" alt="Screen Shot 2023-11-23 at 22 50 54" src="https://github.com/Hiram20buz/transaction/assets/112133798/4236622e-b513-463c-9ec4-ae2ea93e3524">
If you go to : https://goerli.etherscan.io/tx/0xbcfd160f6f91f372d186e8d60d902699f0ba33d5595b4c67042c0eb21973a9dc
<img width="1404" alt="Screen Shot 2023-11-23 at 22 52 26" src="https://github.com/Hiram20buz/transaction/assets/112133798/3a581a0a-cbeb-4a70-9c39-8a261bbc266f">
This is the transaction 
<img width="1436" alt="Screen Shot 2023-11-23 at 22 52 37" src="https://github.com/Hiram20buz/transaction/assets/112133798/d8f12727-20f3-4ff3-bcae-0c0596c0208d">

<img width="1377" alt="Screen Shot 2023-11-23 at 22 52 57" src="https://github.com/Hiram20buz/transaction/assets/112133798/0cce5a80-5949-4e07-8f9d-1433520f2c9b">
This is the base64 file
<img width="1602" alt="Screen Shot 2023-11-23 at 22 53 09" src="https://github.com/Hiram20buz/transaction/assets/112133798/6ae0b360-a9cc-4c6c-ae87-dd2c95f9d82b">

## You can get back  a file from a transaction 
 ```
node testCreateFileFromTransaction/createFileFromTicket.js
```
<img width="1164" alt="Screen Shot 2023-11-23 at 22 56 10" src="https://github.com/Hiram20buz/transaction/assets/112133798/71b66101-57ca-4e06-b551-f1c60f30fa1e">

<img width="1210" alt="Screen Shot 2023-11-23 at 22 57 03" src="https://github.com/Hiram20buz/transaction/assets/112133798/d1ebe82d-e1fb-495b-b2e4-e12fed993daf">
<img width="1407" alt="Screen Shot 2023-11-23 at 22 57 20" src="https://github.com/Hiram20buz/transaction/assets/112133798/5a9b3133-b10c-48a3-b33f-ee329722bc75">
