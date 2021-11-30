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
    try {
        const tx = await petWorld.methods.registerVet(pwVetAddress.value).send({from:ethereum.selectedAddress});
        vetCreatedStatus.innerHTML ="<font color=green>Vet created successfully</font>";
    }
    catch (err){
        vetCreatedStatus.innerHTML = "<font color=red> Vet Creation failed, only Vet Society can create vets</font>";
    }
};

let pwCreatePetButton = document.getElementById("createPet");

/*
* To create Vets
* Use must be connected to Metamask as "VetSociety" address.
*/

pwCreatePetButton.onclick = async () => {
    console.log("Create Pet clicked");
    let petType = document.getElementById("pet-type").value;
    let gender = document.getElementById("pet-gender").value;
    let birthDate = document.getElementById("birth-date").value;
    let birthMonth = document.getElementById("birth-month").value;
    let birthYear = document.getElementById("birth-year").value;
    let dob= birthDate+"-"+birthMonth+"-"+birthYear;
    let ownerAddress = document.getElementById("ownerAddress-input").value;
    let offChainURI = "nothing";
    let picture = document.getElementById("pet-picture").value;
    var web3 = new Web3(window.ethereum);

    const petWorld = new web3.eth.Contract(pwABI, pwAddress);

    petWorld.setProvider(window.ethereum);

    let petCreatedStatus = document.getElementById("petCreatedStatus");
    try {
        const tx = await petWorld.methods.registerPet(petType, gender, dob, ownerAddress, offChainURI).send({from:ethereum.selectedAddress});
        petCreatedStatus.innerHTML ="<font color=green>Pet created successfully</font>";
    }
    catch (err){
        petCreatedStatus.innerHTML = "<font color=red> Pet Creation failed, only Vets can create pets</font>";
    }
};

let pwDeletePetButton = document.getElementById("deletePet");

/*
* To create Vets
* Use must be connected to Metamask as "VetSociety" address.
*/

pwDeletePetButton.onclick = async () => {
    console.log("De-register Pet clicked");
    
    let petID = document.getElementById("pet-id").value;

    var web3 = new Web3(window.ethereum);

    const petWorld = new web3.eth.Contract(pwABI, pwAddress);

    petWorld.setProvider(window.ethereum);

    let petDeletedStatus = document.getElementById("petDeletedStatus");
    try {
        const tx = await petWorld.methods.deletePet(petID).send({from:ethereum.selectedAddress});
        petDeletedStatus.innerHTML ="<font color=green>Pet marked a deceased</font>";
    }
    catch (err){
        petDeletedStatus.innerHTML = "<font color=red> Operation failed, only Vets can mark pets as deceased</font>";
    }
};

let pwUpdatePetButton = document.getElementById("updatePet");
pwUpdatePetButton.onclick = async () => {
  console.log("Update Pet clicked");
  
  let petID = document.getElementById("pet-id-forupdate").value;
  let saleFlag = document.getElementById("sale-flag").value;
  let price = document.getElementById("price").value;

  var web3 = new Web3(window.ethereum);

  const petWorld = new web3.eth.Contract(pwABI, pwAddress);

  petWorld.setProvider(window.ethereum);

  let petUpdatedStatus = document.getElementById("petUpdatedStatus");
  try {
      const tx = await petWorld.methods.updatePet(petID,saleFlag,price).send({from:ethereum.selectedAddress});
      petUpdatedStatus.innerHTML ="<font color=green>Pet updated successfully</font>";
  }
  catch (err){
      petUpdatedStatus.innerHTML = "<font color=red> Operation failed, only pet owners can update their own pet details</font>";
  }
};


let pwGiftPetButton = document.getElementById("giftPet");
pwGiftPetButton.onclick = async () => {
  console.log("Gift Pet clicked");
  
  let petID = document.getElementById("pet-id-forgifting").value;
  let newOwner = document.getElementById("newOwnerAddress-input").value;

  var web3 = new Web3(window.ethereum);

  const petWorld = new web3.eth.Contract(pwABI, pwAddress);

  petWorld.setProvider(window.ethereum);

  let petGiftedStatus = document.getElementById("petGiftedStatus");
  try {
      const tx = await petWorld.methods.giftPet(petID,newOwner).send({from:ethereum.selectedAddress});
      petGiftedStatus.innerHTML ="<font color=green>Pet gifted successfully</font>";
  }
  catch (err){
      petGiftedStatus.innerHTML = "<font color=red> Operation failed, only pet owners can gift their own pet</font>";
  }
};

let pwSearchPetButton = document.getElementById("searchPet");
pwSearchPetButton.onclick = async () => {
  console.log("Search Pet clicked");
  
  let petID = document.getElementById("pet-id-forsearch").value;

  var web3 = new Web3(window.ethereum);

  const petWorld = new web3.eth.Contract(pwABI, pwAddress);

  petWorld.setProvider(window.ethereum);

  let petDetails = document.getElementById("petDetails");
  // try {
  //     const tx = await petWorld.methods.getPet(petID).send({from:ethereum.selectedAddress});
  //     console.log(tx);
  //     petDetails.innerHTML ="<font color=green>Pet details retreived successfully</font>";
  // }
  // catch (err){
  //     petDetails.innerHTML = "<font color=red> Operation failed, cannot retreive pet details</font>";
  // }

  petWorld.methods.getPet(petID).call(function (err, res) {
    if (err) {
      petDetails.innerHTML ="<font color=red>Operation failed, cannot retreive pet details</font>";
      return
    }
    if(res[0]==0){
      petDetails.innerHTML ="<font color=red>Pet does not exist</font>";
    } else {
      displayPet = convertPet(res);
      //console.log("****"+blah[0])
      petDetails.innerHTML ="Pet Id= "+displayPet[0]+"<br> Pet Type= "+displayPet[1]+
      "<br>Gender= "+displayPet[2]+"<br>Date of birth= "+displayPet[3]+"<br>Is Alive= "+displayPet[4]+"<br>For Sale= "+displayPet[5]+
      "<br>Price= "+displayPet[6]+ "<br>Previous Owner= "+displayPet[7]+"<br>Current Owner= "+displayPet[8]+"<br> More Info ="+displayPet[9];
    }
  })
};

function convertPet(res){
  petArray = [];
  //petid
  petArray[0] = res[0];
  //pet type
  if(res[1] == 0){
    petArray[1] = "Cat";
  } else {
    petArray[1] = "Dog";
  }
//pet gender
  if(res[2] == 0){
    petArray[2] = "Male";
  } else {
    petArray[2] = "Female";
  }
  //dob
  petArray[3] = res[3];
  //Alive
  if(res[4] == 0){
    petArray[4] = "<font color=red>No</font>";
  } else {
    petArray[4] = "<font color=green>Yes</font>";
  }
 //for Sale
 if(res[5] == 0){
  petArray[5] = "<font color=red>No</font>";
} else {
  petArray[5] = "<font color=green>Yes</font>";
} 
 //price
 petArray[6] = res[6];
//previous owner
petArray[7] = res[7];
//current owner
petArray[8] = res[8];
//moreInfo
petArray[9] = res[9];
  return petArray;
}