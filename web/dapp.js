document.getElementById("defaultOpen").click();

let selectedPetBuyingPrice = 0;
//Contract address on local Ganache
//const pwAddress = '0x7c1846cDcDc8D9E15d3DfAa74501AaDE21252f2e';

//Contract address on Ropsten
const pwAddress = '0x8796751762f49a73BA438311932Fd72CD92E7355';

const pwABI = [
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "previousOwner",
        "type": "address"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "newOwner",
        "type": "address"
      }
    ],
    "name": "OwnershipTransferred",
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
        "indexed": true,
        "internalType": "bytes32",
        "name": "role",
        "type": "bytes32"
      },
      {
        "indexed": true,
        "internalType": "bytes32",
        "name": "previousAdminRole",
        "type": "bytes32"
      },
      {
        "indexed": true,
        "internalType": "bytes32",
        "name": "newAdminRole",
        "type": "bytes32"
      }
    ],
    "name": "RoleAdminChanged",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "bytes32",
        "name": "role",
        "type": "bytes32"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "account",
        "type": "address"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "sender",
        "type": "address"
      }
    ],
    "name": "RoleGranted",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "bytes32",
        "name": "role",
        "type": "bytes32"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "account",
        "type": "address"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "sender",
        "type": "address"
      }
    ],
    "name": "RoleRevoked",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "bool",
        "name": "b",
        "type": "bool"
      }
    ],
    "name": "VetCreated",
    "type": "event"
  },
  {
    "inputs": [],
    "name": "DEFAULT_ADMIN_ROLE",
    "outputs": [
      {
        "internalType": "bytes32",
        "name": "",
        "type": "bytes32"
      }
    ],
    "stateMutability": "view",
    "type": "function",
    "constant": true
  },
  {
    "inputs": [],
    "name": "VETS_ROLE",
    "outputs": [
      {
        "internalType": "bytes32",
        "name": "",
        "type": "bytes32"
      }
    ],
    "stateMutability": "view",
    "type": "function",
    "constant": true
  },
  {
    "inputs": [
      {
        "internalType": "bytes32",
        "name": "role",
        "type": "bytes32"
      }
    ],
    "name": "getRoleAdmin",
    "outputs": [
      {
        "internalType": "bytes32",
        "name": "",
        "type": "bytes32"
      }
    ],
    "stateMutability": "view",
    "type": "function",
    "constant": true
  },
  {
    "inputs": [
      {
        "internalType": "bytes32",
        "name": "role",
        "type": "bytes32"
      },
      {
        "internalType": "uint256",
        "name": "index",
        "type": "uint256"
      }
    ],
    "name": "getRoleMember",
    "outputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function",
    "constant": true
  },
  {
    "inputs": [
      {
        "internalType": "bytes32",
        "name": "role",
        "type": "bytes32"
      }
    ],
    "name": "getRoleMemberCount",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function",
    "constant": true
  },
  {
    "inputs": [
      {
        "internalType": "bytes32",
        "name": "role",
        "type": "bytes32"
      },
      {
        "internalType": "address",
        "name": "account",
        "type": "address"
      }
    ],
    "name": "grantRole",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "bytes32",
        "name": "role",
        "type": "bytes32"
      },
      {
        "internalType": "address",
        "name": "account",
        "type": "address"
      }
    ],
    "name": "hasRole",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "view",
    "type": "function",
    "constant": true
  },
  {
    "inputs": [],
    "name": "owner",
    "outputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function",
    "constant": true
  },
  {
    "inputs": [],
    "name": "renounceOwnership",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "bytes32",
        "name": "role",
        "type": "bytes32"
      },
      {
        "internalType": "address",
        "name": "account",
        "type": "address"
      }
    ],
    "name": "renounceRole",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "bytes32",
        "name": "role",
        "type": "bytes32"
      },
      {
        "internalType": "address",
        "name": "account",
        "type": "address"
      }
    ],
    "name": "revokeRole",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "bytes4",
        "name": "interfaceId",
        "type": "bytes4"
      }
    ],
    "name": "supportsInterface",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "view",
    "type": "function",
    "constant": true
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "newOwner",
        "type": "address"
      }
    ],
    "name": "transferOwnership",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "vet",
        "type": "address"
      }
    ],
    "name": "registerVet",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
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
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
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
    "stateMutability": "view",
    "type": "function",
    "constant": true
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "id",
        "type": "uint256"
      }
    ],
    "name": "deletePet",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
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
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
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
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "id",
        "type": "uint256"
      }
    ],
    "name": "buyPet",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function",
    "payable": true
  }
]

//metamask - account 3  Ganache index 0
//vetServicesAddress/owner = 0xf91bB69dF9f126EC0fB918fC486780aF6F2dB497;

//metamask - account 4 Ganache index 1
//vet1Address = 0x77C67461DBa7F8C5EBA7a74a36CB6D25B10d48D6;

//metamask - account 5 Ganache index 2
//vet2Address = 0xAD9076848502D206C0B29F04fE76033d3f1ceC9B;

//metamask - account 6  Ganache index 3
//owner1Address = 0xf68B532df2963FaA02F1c6ac5f48b6d66a34dBa5;

//metamask - account 7 Ganache index 4
//owner2Address = 0x75a80F000AEFE8FD4F92b9f874522027c1d7CF9F;

//metamask - account 8 Ganache index 5
//owner3Address = 0x6F87E71e5e62C73E54042d58446877DB5F151bC3;

//metamask - account 9 Ganache index 6
//buyer1Address = 0x2fc2Ad2DFB56293D695B49C15Bfbd89AC501ca56;

//metamask - account 10 Ganache index 7
//buyer2Address = 0xFa24291625D3f2170F370f751F4e83A3Dc1deF22;


function openTab(evt, tabName) {
  // Declare all variables
  var i, tabcontent, tablinks;

  // Get all elements with class="tabcontent" and hide them
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Get all elements with class="tablinks" and remove the class "active"
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  // Show the current tab, and add an "active" class to the button that opened the tab
  document.getElementById(tabName).style.display = "block";
  evt.currentTarget.className += " active";
}

window.addEventListener('load',()=>{
    let mmDetected = document.getElementById("mm-detected");
    if(typeof window.etherium != undefined){
        mmDetected.innerHTML = "<font color='green'>Metamask detected</font>";
    } else { 
        mmDetected.innerHTML = "<font color='red'>Metamask not detected</font>";
    }
});

let mmEnable = document.getElementById("mm-connect");

/*
* To connect to Metamask and get current account details
* To check if Metamask is connected to Ropsten or not
*/

mmEnable.onclick = async () => {
    await ethereum.request({method:'eth_requestAccounts'});

    let mmCurrentAccount = document.getElementById("mm-current-account");
    mmCurrentAccount.innerHTML = "Current Account: &nbsp;&nbsp;"+ convertAddress(ethereum.selectedAddress);
    var web3 = new Web3(window.ethereum);
    web3.eth.getBalance(ethereum.selectedAddress, (err, wei) => {
      balance = web3.utils.fromWei(wei, 'ether');
      decimal= balance.indexOf(".");
      bal = balance.substring(0, decimal+5);
      let mmCurrentBalance = document.getElementById("mm-current-balance");
      mmCurrentBalance.innerHTML = "Current Balance: &nbsp;&nbsp;"+ bal +" ETH&nbsp;&nbsp;&nbsp;&nbsp;";
    })
    let mmChain = document.getElementById("mm-chain");
    if (ethereum.chainId == 3){
        mmChain.innerHTML = "<font color='green'>Connected to: Ropsten</font>";
    } else {
        mmChain.innerHTML = "<font color='red'>You are not on Ropsten.</font>";
    }
};




let pwCreateVetButton = document.getElementById("createVet");

/*
* To create Vets
* Use must be connected to Metamask as "VetSociety" address.
*/

pwCreateVetButton.onclick = async () => {
    let pwVetAddress = document.getElementById("vetAddress-input");

    var web3 = new Web3(window.ethereum);

    const petWorld = new web3.eth.Contract(pwABI, pwAddress);

    petWorld.setProvider(window.ethereum);

    let vetCreatedStatus = document.getElementById("vetCreatedStatus");
    try {
        const tx = await petWorld.methods.registerVet(pwVetAddress.value).send({from:ethereum.selectedAddress});
        vetCreatedStatus.innerHTML ="<font color=green>Vet created successfully</font>";
        setTimeout(() => {  vetCreatedStatus.innerHTML = ""; }, 5000);
    }
    catch (err){
        vetCreatedStatus.innerHTML = "<font color=red> Vet Creation failed, only Vet Society can create vets</font>";
        setTimeout(() => {  vetCreatedStatus.innerHTML = ""; }, 5000);
    }
};

let pwCreatePetButton = document.getElementById("createPet");

/*
* To create Vets
* Use must be connected to Metamask as "VetSociety" address.
*/

pwCreatePetButton.onclick = async () => {
    let petType = document.getElementById("pet-type").value;
    let gender = document.getElementById("pet-gender").value;
    let birthDate = document.getElementById("birth-date").value;
    let birthMonth = document.getElementById("birth-month").value;
    let birthYear = document.getElementById("birth-year").value;
    let dob= birthDate+"-"+birthMonth+"-"+birthYear;
    let ownerAddress = document.getElementById("ownerAddress-input").value;
    let offChainURI = "nothing";
    let picture = document.getElementById("pet-picture").files;
    var web3 = new Web3(window.ethereum);
      
    let formData = new FormData();
    formData.append('file',picture[0]);

    const URL="https://api.pinata.cloud/pinning/pinFileToIPFS";
    $.ajax({url:URL,
      type: "POST",
      processData: false,
      contentType: false,
      headers:{
        pinata_api_key: "0254cc66fef779207cda",
        pinata_secret_api_key: "06f86af5c6944a7c1a7b9d878a0c789b4b25061f6c7535d0f0427316871d8b0e",
      },
      data: formData,
      success: async function(result){
      offChainURI = result.IpfsHash;
      ///////
      const petWorld = new web3.eth.Contract(pwABI, pwAddress);
      petWorld.setProvider(window.ethereum);
      let petCreatedStatus = document.getElementById("petCreatedStatus");
      try {
        const tx = await petWorld.methods.registerPet(petType, gender, dob, ownerAddress, offChainURI).send({from:ethereum.selectedAddress});
        petCreatedStatus.innerHTML ="<font color=green>Pet created successfully</font>";
        setTimeout(() => {  petCreatedStatus.innerHTML = ""; }, 5000);
      }
      catch (err){
        petCreatedStatus.innerHTML = "<font color=red> Pet Creation failed, only Vets can create pets</font>";
        setTimeout(() => {  petCreatedStatus.innerHTML = ""; }, 5000);
      }
      ///////
      },
      error: async function(error){
        //////
        const petWorld = new web3.eth.Contract(pwABI, pwAddress);
        petWorld.setProvider(window.ethereum);
        let petCreatedStatus = document.getElementById("petCreatedStatus");
        try {
          const tx = await petWorld.methods.registerPet(petType, gender, dob, ownerAddress, offChainURI).send({from:ethereum.selectedAddress});
          petCreatedStatus.innerHTML ="<font color=green>Pet created successfully</font>,<font color=red> but without picture</font>";
          setTimeout(() => {  petCreatedStatus.innerHTML = ""; }, 5000);
         }
        catch (err){
          petCreatedStatus.innerHTML = "<font color=red> Pet Creation failed, only Vets can create pets</font>";
          setTimeout(() => {  petCreatedStatus.innerHTML = ""; }, 5000);
        }
        //////
      }});
};

let pwDeletePetButton = document.getElementById("deletePet");

/*
* To create Vets
* Use must be connected to Metamask as "VetSociety" address.
*/

pwDeletePetButton.onclick = async () => {
    
    let petID = document.getElementById("pet-id").value;

    var web3 = new Web3(window.ethereum);

    const petWorld = new web3.eth.Contract(pwABI, pwAddress);

    petWorld.setProvider(window.ethereum);

    let petDeletedStatus = document.getElementById("petDeletedStatus");
    try {
        const tx = await petWorld.methods.deletePet(petID).send({from:ethereum.selectedAddress});
        petDeletedStatus.innerHTML ="<font color=green>Pet marked a deceased</font>";
        setTimeout(() => {  petDeletedStatus.innerHTML = ""; }, 5000);
    }
    catch (err){
        petDeletedStatus.innerHTML = "<font color=red> Operation failed, only Vets can mark pets as deceased</font>";
        setTimeout(() => {  petDeletedStatus.innerHTML = ""; }, 5000);
    }
};

let pwUpdatePetButton = document.getElementById("updatePet");
  pwUpdatePetButton.onclick = async () => {
  
  let petID = document.getElementById("pet-id-forupdate").value;
  let saleFlag = document.getElementById("sale-flag").value;
  let price = document.getElementById("price").value;

  var web3 = new Web3(window.ethereum);

  const petWorld = new web3.eth.Contract(pwABI, pwAddress);

  petWorld.setProvider(window.ethereum);

  let petUpdatedStatus = document.getElementById("petUpdatedStatus");
  try {
      let ethPrice = web3.utils.toWei(price, 'ether');
      const tx = await petWorld.methods.updatePet(petID,saleFlag,ethPrice).send({from:ethereum.selectedAddress});
      petUpdatedStatus.innerHTML ="<font color=green>Pet updated successfully</font>";
      setTimeout(() => {  petUpdatedStatus.innerHTML = ""; }, 5000);
  }
  catch (err){
      petUpdatedStatus.innerHTML = "<font color=red> Operation failed, only pet owners can update their own pet details</font>";
      setTimeout(() => {  petUpdatedStatus.innerHTML = ""; }, 5000);
  }
};


let pwGiftPetButton = document.getElementById("giftPet");
  pwGiftPetButton.onclick = async () => {
  
  let petID = document.getElementById("pet-id-forgifting").value;
  let newOwner = document.getElementById("newOwnerAddress-input").value;

  var web3 = new Web3(window.ethereum);

  const petWorld = new web3.eth.Contract(pwABI, pwAddress);

  petWorld.setProvider(window.ethereum);

  let petGiftedStatus = document.getElementById("petGiftedStatus");
  try {
      const tx = await petWorld.methods.giftPet(petID,newOwner).send({from:ethereum.selectedAddress});
      petGiftedStatus.innerHTML ="<font color=green>Pet gifted successfully</font>";
      setTimeout(() => {  petGiftedStatus.innerHTML = ""; }, 5000);
  }
  catch (err){
      petGiftedStatus.innerHTML = "<font color=red> Operation failed, only pet owners can gift their own pet</font>";
      setTimeout(() => {  petGiftedStatus.innerHTML = ""; }, 5000);
  }
};

let pwSearchPetButton = document.getElementById("searchPet");
  pwSearchPetButton.onclick = async () => {
  
  let petID = document.getElementById("pet-id-forsearch").value;

  if(petID==""){
    petID=1;
    document.getElementById("pet-id-forsearch").value=1;
  }
  var web3 = new Web3(window.ethereum);

  const petWorld = new web3.eth.Contract(pwABI, pwAddress);

  petWorld.setProvider(window.ethereum);

  let petDetails = document.getElementById("petDetails");
  petWorld.methods.getPet(petID).call(function (err, res) {
    if (err) {
      petDetails.innerHTML ="<font color=red>Operation failed, cannot retreive pet details</font>";
      setTimeout(() => {  petDetails.innerHTML = ""; }, 5000);
      return
    }
    if(res[0]==0){
      petDetails.innerHTML ="<font color=red>Pet does not exist</font>";
      setTimeout(() => {  petDetails.innerHTML = ""; }, 5000);
    } else {
      displayPet = convertPet(res);
      petDetails.innerHTML ="<table><tr><td>"+
      "Pet Id= "+displayPet[0]+"<br> Pet Type= "+displayPet[1]+
      "<br>Gender= "+displayPet[2]+"<br>Date of birth= "+displayPet[3]+"<br>Is Alive= "+displayPet[4]+"<br>For Sale= "+displayPet[5]+
      "<br>Price= "+displayPet[6]+ " ETH<br>Previous Owner= "+displayPet[7]+"<br>Current Owner= "+displayPet[8]+"</td>"+
      "<td>"+displayPet[9]+"</td></tr></table>";
    }
  })
};


let leftSearchButton = document.getElementById("leftSearch");
leftSearchButton.onclick = () => {
  let petID = document.getElementById("pet-id-forsearch").value;

  if(petID==""){
    document.getElementById("pet-id-forsearch").value = 1;
  } else if (petID>=2){
    document.getElementById("pet-id-forsearch").value = petID-1;
  } 
  document.getElementById("searchPet").click();
};

let rightSearchButton = document.getElementById("rightSearch");
rightSearchButton.onclick = () => {
  let petID = document.getElementById("pet-id-forsearch").value;

  if(petID==""){
    document.getElementById("pet-id-forsearch").value = 1;
  } else {
    document.getElementById("pet-id-forsearch").value = parseInt(petID)+1;
  } 
  document.getElementById("searchPet").click();
};


function convertPet(res){
  let saleButton = document.getElementById("buy-pet");
  saleButtonDisabledFlag = false;
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
    saleButton.disabled = true;
    saleButtonDisabledFlag = true;
  } else {
    petArray[4] = "<font color=green>Yes</font>";
    saleButton.disabled = false;
  }
 //for Sale
 if(res[5] == 0){
  petArray[5] = "<font color=red>No</font>";
  saleButton.disabled = true;
} else {
  petArray[5] = "<font color=green>Yes</font>";
  if(saleButtonDisabledFlag==false){
  saleButton.disabled = false;}
} 
 //price
  var temp = res[6] / 10**18;
  petArray[6] = temp;
 selectedPetBuyingPrice = res[6];
//previous owner
petArray[7] = convertAddress(res[7]);
//current owner
petArray[8] = convertAddress(res[8]);
//moreInfo
if(res[9] == "nothing"){
  petArray[9] = "<img width=300 height=200 src='resources/no-image.jpeg'/>";
}
else {
petArray[9] = "<img src='https://gateway.pinata.cloud/ipfs/"+res[9]+"'/>";
}
  return petArray;
}

function convertAddress(addr){
  if(addr=="0x0000000000000000000000000000000000000000"){ 
    return "None";
  } else {
    if(addr.length != 42){
      return "Invalid address";
    } else {
      let formattedAddr = addr.substring(0,7)+"..."+addr.substring(37);
      return formattedAddr;
    }
  }
}

let buyPetButton = document.getElementById("buy-pet");
  buyPetButton.onclick = async () => {
  
  let petID = document.getElementById("pet-id-forsearch").value;

  var web3 = new Web3(window.ethereum);

  const petWorld = new web3.eth.Contract(pwABI, pwAddress);

  petWorld.setProvider(window.ethereum);

  let petSold = document.getElementById("buy-message");

  try {
      const tx = await petWorld.methods.buyPet(petID).send({from:ethereum.selectedAddress, value:selectedPetBuyingPrice});
      petSold.innerHTML ="<font color=green>You have bought this pet!</font>";
      setTimeout(() => {  petSold.innerHTML = ""; }, 5000);
  }
  catch (err){
      petSold.innerHTML = "<font color=red> Operation failed, are you already the owner or do you have sufficient funds?</font>";
      setTimeout(() => {  petSold.innerHTML = ""; }, 5000);
  }
};