document.getElementById("defaultOpen").click();

let selectedPetBuyingPrice = 0;
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
        mmChain.innerHTML = "<font color='red'>Please connect to Ropsten</font>";
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


    // const URL="https://api.pinata.cloud/data/testAuthentication";
    // $.ajax({url:URL,
    //   type: "GET",
    //   headers:{
    //     pinata_api_key: "0254cc66fef779207cda",
    //     pinata_secret_api_key: "06f86af5c6944a7c1a7b9d878a0c789b4b25061f6c7535d0f0427316871d8b0e"
    //   },
    //   success: function(result){
    //   console.log("hello how r u");
    //   console.log(result);
    //   },
    //   error: function(error){
    //     console.log("Unable to get complete action with pinata");
    //   }});
      
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
      const tx = await petWorld.methods.updatePet(petID,saleFlag,price).send({from:ethereum.selectedAddress});
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
      "<br>Price= "+displayPet[6]+ "<br>Previous Owner= "+displayPet[7]+"<br>Current Owner= "+displayPet[8]+"</td>"+
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
 petArray[6] = res[6];
 selectedPetBuyingPrice = res[6];
//previous owner
petArray[7] = convertAddress(res[7]);
//current owner
petArray[8] = convertAddress(res[8]);
//moreInfo
if(res[9] == "nothing"){
  petArray[9] = "<img width=300 height=200 src='../resources/no-image.jpeg'/>";
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

    console.log("Price "+selectedPetBuyingPrice);

    price = web3.utils.toHex(web3.utils.toWei(selectedPetBuyingPrice, 'ether'));
  try {
      const tx = await petWorld.methods.buyPet(petID).send({from:ethereum.selectedAddress, value:price});
      petSold.innerHTML ="<font color=green>You have bought this pet!</font>";
      setTimeout(() => {  petSold.innerHTML = ""; }, 5000);
  }
  catch (err){
      petSold.innerHTML = "<font color=red> Operation failed, are you already the owner or do you have sufficient funds?</font>";
      setTimeout(() => {  petSold.innerHTML = ""; }, 5000);
  }
};