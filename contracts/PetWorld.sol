// SPDX-License-Identifier: MIT
pragma solidity >=0.5.16 <0.9.0;

contract PetWorld {

  uint totalPetCount = 0;
  uint totalVetCount = 0;

  mapping(uint => Pet) pets;
  mapping(uint => address) vets;

  address vetSociety;

  enum PetType{Cat, Dog}
  enum Gender{Male, Female}

  struct Pet{
    uint id;
    PetType petType;
    Gender gender;
    string dob;
    bool isAlive;
    bool forSale;
    uint price;
    address payable previousOwner;
    address payable currentOwner;
    string offChainInfoURI;
  }

  event VetCreated(uint id);
  event PetCreated(uint id);
  event PetDeleted(uint id);
  event PetUpdated(uint id);
  event PetSold(uint id);
  event PetGifted(uint id);

 modifier callerIsVetSociety () { 
    require (msg.sender == vetSociety, "Only vet society is allowed to perform this operation"); 
    _;
  }

  modifier callerIsPetOwner (uint id) { 
    require (msg.sender == pets[id].currentOwner, "Only current owner is allowed to perform this operation"); 
    _;
  }

modifier callerIsNotPetOwner (uint id) { 
    require (msg.sender != pets[id].currentOwner, "Current owner is NOT allowed to perform this operation"); 
    _;
  }

modifier validPrice (uint _price) { 
    require (_price > 0, "Price isn't valid"); 
    _;
  }
  
  modifier forSale(uint id){
    require(pets[id].forSale == true, "Pet not for sale");
    _;
  }

  modifier callerIsVet(address _address){
    bool vetMatched = false;
    for(uint i=1;i<= totalVetCount;i++){
      if(vets[i] == _address){
        vetMatched = true;
        break;
      }
    }
    require (vetMatched == true, "Only vets are allowed to perform this operation");
    _;
  }

  modifier paidEnough(uint _price) { 
    require(msg.value >= _price, "Not enough money paid"); 
    _;
  }

  modifier refundExcess(uint id) {
    _;
     uint _price = pets[id].price;
     uint amountToRefund = msg.value - _price;
     pets[id].currentOwner.transfer(amountToRefund);
  }

  constructor() public {
    // Vet Society deploys and initializes this smart contract.
    vetSociety = msg.sender;
  }

  function getVetSociety() public returns (address vs){
    return vetSociety;
  }

  function registerVet(address vet) public callerIsVetSociety(){
    totalVetCount++;
    vets[totalVetCount] = vet;
    emit VetCreated(totalVetCount);
  }

  function getVet(uint id) public view returns (address vet){
    return vets[id];
  }

  function registerPet(PetType _petType,Gender _gender,string memory _dob, address payable _currentOwner, string memory _uri) public callerIsVet(msg.sender){
    totalPetCount++;

    pets[totalPetCount] = Pet({
      id: totalPetCount,
      petType: _petType,
      gender: _gender,
      dob: _dob,
      isAlive: true,
      forSale: false,
      price: 0,
      previousOwner: 0x0000000000000000000000000000000000000000,
      currentOwner: _currentOwner,
      offChainInfoURI: _uri
    });
    emit PetCreated(totalPetCount);    
  }

function getPet(uint id) public view returns (uint _id, PetType _type, Gender _gender, string memory _dob, bool _isAlive, bool _forSale, uint _price, address _previousOwner, address _currentOwner, string memory _uri){
    _id = pets[id].id;
    _type = pets[id].petType;
    _gender = pets[id].gender;
    _dob = pets[id].dob;
    _isAlive = pets[id].isAlive;
    _forSale = pets[id].forSale;
    _price = pets[id].price;
    _previousOwner = pets[id].previousOwner;
    _currentOwner = pets[id].currentOwner;
    _uri = pets[id].offChainInfoURI;

    return(_id,_type,_gender,_dob,_isAlive,_forSale,_price,_previousOwner,_currentOwner,_uri);
  }

  function deletePet(uint id) public callerIsVet(msg.sender){

    pets[id].isAlive = false;
    pets[id].previousOwner = pets[id].currentOwner;
    pets[id].currentOwner = 0x0000000000000000000000000000000000000000;
    emit PetDeleted(id);    
  }

  function updatePet(uint id, bool _forSale, uint _price) public callerIsPetOwner(id) validPrice(_price){

    pets[id].forSale = _forSale;
    pets[id].price = _price;
    
    emit PetUpdated(id);    
  }

  function giftPet(uint id, address payable receiver) public callerIsPetOwner(id){

    pets[id].previousOwner = pets[id].currentOwner;
    pets[id].currentOwner = receiver;
    emit PetGifted(id);    
  }

  function buyPet(uint id) public payable forSale(id) paidEnough(pets[id].price) callerIsNotPetOwner(id) refundExcess(id){
    pets[id].previousOwner = pets[id].currentOwner;
    pets[id].currentOwner = msg.sender;
    pets[id].forSale = false;
    uint _price = pets[id].price;
    pets[id].previousOwner.transfer(_price);
  
  emit PetSold(id);

  }

}