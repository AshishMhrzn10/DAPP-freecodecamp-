var simpleStorageABI = [
    {
        "constant": false,
        "inputs": [
            {
                "internalType": "uint256",
                "name": "x",
                "type": "uint256"
            }
        ],
        "name": "setData",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "getData",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    }
];
var simpleStorageAddress = '0x621732ec749650188bC48c862587d763C970EB4c';
var web3 = new Web3('http://localhost:9545');
var simpleStorage = new web3.eth.Contract(simpleStorageABI, simpleStorageAddress);

document.addEventListener('DOMContentLoaded', () => {
    const $setValue = document.getElementById('setData');
    const $data = document.getElementById('data');
    let accounts = [];

    web3.eth.getAccounts()
        .then(_accounts => {
            accounts = _accounts;
        });

    const getValue = () => {
        simpleStorage.methods.getData().call().then(result => {
            $data.innerHTML = result;
        });
    };
    getValue();

    $setValue.addEventListener('submit', e => {
        e.preventDefault();
        const data = e.target.elements[0].value;
        simpleStorage.methods
            .setData(data)
            .send({ from: accounts[0] })
            .then(getValue);
    });
});

