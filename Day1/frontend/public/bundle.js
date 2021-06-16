var contractABI = [];
var contractAddress = '0xc876c3E49D14Ef9cE127824A33Bf6951F3D7fa56';
var web3 = new Web3('http://localhost:9545');
var simpleSmartContract = new web3.eth.Contract(contractABI, contractAddress);
console.log(simpleSmartContract);

web3.eth.getAccounts().then(console.log);