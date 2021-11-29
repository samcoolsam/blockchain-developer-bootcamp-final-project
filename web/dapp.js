const pwAddress = '0xEB6C837FB058A7d021E3563acA7327f75756967c';

const pwABI = [
    {
      "inputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "constructor"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "id",
          "type": "uint256"
        }
      ],
      "name": "PetCreated",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "id",
          "type": "uint256"
        }
      ],
      "name": "PetDeleted",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "id",
          "type": "uint256"
        }
      ],
      "name": "PetGifted",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "id",
          "type": "uint256"
        }
      ],
      "name": "PetSold",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "id",
          "type": "uint256"
        }
      ],
      "name": "PetUpdated",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "id",
          "type": "uint256"
        }
      ],
      "name": "VetCreated",
      "type": "event"
    },
    {
      "constant": false,
      "inputs": [],
      "name": "getVetSociety",
      "outputs": [
        {
          "internalType": "address",
          "name": "vs",
          "type": "address"
        }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "internalType": "address",
          "name": "vet",
          "type": "address"
        }
      ],
      "name": "registerVet",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "internalType": "uint256",
          "name": "id",
          "type": "uint256"
        }
      ],
      "name": "getVet",
      "outputs": [
        {
          "internalType": "address",
          "name": "vet",
          "type": "address"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "internalType": "enum PetWorld.PetType",
          "name": "_petType",
          "type": "uint8"
        },
        {
          "internalType": "enum PetWorld.Gender",
          "name": "_gender",
          "type": "uint8"
        },
        {
          "internalType": "string",
          "name": "_dob",
          "type": "string"
        },
        {
          "internalType": "address payable",
          "name": "_currentOwner",
          "type": "address"
        },
        {
          "internalType": "string",
          "name": "_uri",
          "type": "string"
        }
      ],
      "name": "registerPet",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "internalType": "uint256",
          "name": "id",
          "type": "uint256"
        }
      ],
      "name": "getPet",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "_id",
          "type": "uint256"
        },
        {
          "internalType": "enum PetWorld.PetType",
          "name": "_type",
          "type": "uint8"
        },
        {
          "internalType": "enum PetWorld.Gender",
          "name": "_gender",
          "type": "uint8"
        },
        {
          "internalType": "string",
          "name": "_dob",
          "type": "string"
        },
        {
          "internalType": "bool",
          "name": "_isAlive",
          "type": "bool"
        },
        {
          "internalType": "bool",
          "name": "_forSale",
          "type": "bool"
        },
        {
          "internalType": "uint256",
          "name": "_price",
          "type": "uint256"
        },
        {
          "internalType": "address",
          "name": "_previousOwner",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "_currentOwner",
          "type": "address"
        },
        {
          "internalType": "string",
          "name": "_uri",
          "type": "string"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "internalType": "uint256",
          "name": "id",
          "type": "uint256"
        }
      ],
      "name": "deletePet",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "internalType": "uint256",
          "name": "id",
          "type": "uint256"
        },
        {
          "internalType": "bool",
          "name": "_forSale",
          "type": "bool"
        },
        {
          "internalType": "uint256",
          "name": "_price",
          "type": "uint256"
        }
      ],
      "name": "updatePet",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "internalType": "uint256",
          "name": "id",
          "type": "uint256"
        },
        {
          "internalType": "address payable",
          "name": "receiver",
          "type": "address"
        }
      ],
      "name": "giftPet",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "internalType": "uint256",
          "name": "id",
          "type": "uint256"
        }
      ],
      "name": "buyPet",
      "outputs": [],
      "payable": true,
      "stateMutability": "payable",
      "type": "function"
    }
  ]

//metamask - account 3  Ganache index 0
//vetServicesAddress = 0x1c1abA612dd658b2d707F99d1c3d080000Cf2cbC;

//metamask - account 4 Ganache index 1
//vet1Address = 0x44160523E58a95034E84f59938E65ca2d8e29411;

//metamask - account 5 Ganache index 2
//vet2Address = 0xF3be553401550aE80Deb6Ef6D4d1d0d8f48e1704;

//metamask - account 6  Ganache index 3
//owner1Address = 0x6515e5f89380832d367dA987A78154c3dEE75b75;

//metamask - account 7 Ganache index 4
//owner2Address = 0xD7144CD6791De3E43D56d80E7F7a56157d61540d;

//metamask - account 8 Ganache index 5
//owner3Address = 0x95C2A37dD7Fb67054b134a6DD64e6A7F2b327843;

//metamask - account 9 Ganache index 6
//buyer1Address = 0x6fb5628cCD54D995bCFb43929765C2B9C7e672C1;

//metamask - account 10 Ganache index 7
//buyer2Address = 0xF30377E1F416Ad640DAC3a918626F9aAB9BFb61A;

//metamask - account 11 Ganache index 8
//NOTUSE1 = 0x6b92CD5b76E44399E5b105e37772620ecCAce6D5;

//metamask - account 12 Ganache index 9
//NOTUSE2 = 0x4D57bD11367987F681f8D5bBc4130538eC06A698;

window.addEventListener('load',()=>{
    let mmDetected = document.getElementById("mm-detected");
    if(typeof window.etherium != undefined){
        console.log("Metamask available");
        mmDetected.innerHTML = "<font color='green'>Metamask Detected successfully</font>";
    } else { 
        console.log("Metamask isn't avaialble");
        mmDetected.innerHTML = "<font color='red'>Metamask isn't Detected</font>";
    }
});

let mmEnable = document.getElementById("mm-connect");

/*
* To connect to Metamask and get current account details
* To check if Metamask is connected to Ropsten or not
*/

mmEnable.onclick = async () => {
    console.log("Connect to Metamask clicked");
    await ethereum.request({method:'eth_requestAccounts'});

    let mmCurrentAccount = document.getElementById("mm-current-account");
    mmCurrentAccount.innerHTML = "Current Account "+ ethereum.selectedAddress;

    let mmChain = document.getElementById("mm-chain");
    if (ethereum.chainId == 3){
        mmChain.innerHTML = "<font color='green'>You are connected to Ropsten</font>";
    } else {
        mmChain.innerHTML = "<font color='red'>Please open Metamask and connect to Ropsten</font>";
    }
};




let pwCreateVetButton = document.getElementById("createVet");

/*
* To create Vets
* Use must be connected to Metamask as "VetSociety" address.
*/

pwCreateVetButton.onclick = async () => {
    console.log("Create Vet clicked");
    let pwVetAddress = document.getElementById("vetAddress-input");

    var web3 = new Web3(window.ethereum);

    const petWorld = new web3.eth.Contract(pwABI, pwAddress);

    petWorld.setProvider(window.ethereum);

    let vetCreatedStatus = document.getElementById("vetCreatedStatus");
    //vetCreatedStatus.innerHTML = "Hello";
    try {
        const tx = await petWorld.methods.registerVet(pwVetAddress.value).send({from:ethereum.selectedAddress});
        vetCreatedStatus.innerHTML ="<font color=green>Vet created successfully</font>";
    }
    catch (err){
        vetCreatedStatus.innerHTML = "<font color=red> Vet Creation failed, only Vet Society can create vets</font>";
    }
};