// SPDX-License-Identifier: MIT
pragma solidity = 0.8.10;
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/access/AccessControl.sol";
import "@openzeppelin/contracts/access/AccessControlEnumerable.sol";

/// @title PetWorld is a decentralized global Pet directory
/// @author Sameer Bakshi
/// @notice This is just a learning smart contract which will be deployed on Ropsten 
/// @notice This contract also uses OpenZeppelin's Ownable and AccessControlEnumerable interfaces for RBAC.
contract PetWorld is Ownable, AccessControlEnumerable {

 bytes32 public constant  VETS_ROLE = keccak256("VETS_ROLE");

  uint totalPetCount = 0;

  mapping(uint => Pet) pets;

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

  /// Event generated whenever a new Vet is created
  event VetCreated(bool b);
  /// Event generated whenever a new Pet is registered with an owner
  event PetCreated(uint id);
  /// Event generated whenever a Pet is marked as dead
  event PetDeleted(uint id);
  /// Event generated whenever a Pet is updated by it's owner
  event PetUpdated(uint id);
  /// Event generated whenever a Pet is sold
  event PetSold(uint id);
  /// Event generated whenever a Pet is gifted
  event PetGifted(uint id);

  /// To check that ONLY the current pet Owners can call a certain functionality
  modifier callerIsPetOwner (uint id) { 
    require (msg.sender == pets[id].currentOwner, "Only current owner is allowed to perform this operation"); 
    _;
  }

 /// To check that ONLY those who current dont' own a particular pet can call a certain functionality
modifier callerIsNotPetOwner (uint id) { 
    require (msg.sender != pets[id].currentOwner, "Current owner is NOT allowed to perform this operation"); 
    _;
  }

 /// To check that the price at which the Pet is being sold is valid
modifier validPrice (uint _price) { 
    require (_price > 0, "Price isn't valid"); 
    _;
  }
  
   /// To check that only the pets marked for sale can be bought
  modifier forSale(uint id){
    require(pets[id].forSale == true, "Pet not for sale");
    _;
  }

   /// To check that ONLY the Vets can call certain functionality
  modifier callerIsVet(address _address){
    require(hasRole(VETS_ROLE, _address), "Only vets are allowed to perform this operation");
    _;
  }

   /// To check that the right amount is being paid
  modifier paidEnough(uint _price) { 
    require(msg.value >= _price, "Not enough money paid"); 
    _;
  }

   /// To refund the excess back to the sender
  modifier refundExcess(uint id) {
    _;
     uint _price = pets[id].price;
     uint amountToRefund = msg.value - _price;
     pets[id].currentOwner.transfer(amountToRefund);
  }

  /// @notice Public method to register new Vet. This method generates VetCreated event upon successful creation of a Vet.
  /// @param vet This is the address of the Vet to be registered
  /// @notice Only contract owner (VET SOCIETY / GOVT) can register Vets, checked by "onlyOwner" modifier
  function registerVet(address vet) public onlyOwner {
    _setupRole(VETS_ROLE, vet);
    emit VetCreated(true);
  }

  /// @notice Public method to register new Pet. This method generates PetCreated event upon successful creation of a Pet.
  /// @param _petType To identify the type of pet Cat/Dog etc.
  /// @param _gender To identify the gender of pet Male/Female.
  /// @param _dob To register the date of birth of pet.
  /// @param _currentOwner To hold the address of the current owner of the pet
  /// @param _uri To hold the reference to the pinned image URL in Pinata
  /// @notice Only Vets can register Pets, checked by callerIsVet modifier
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
      previousOwner: payable(0x0000000000000000000000000000000000000000),
      currentOwner: _currentOwner,
      offChainInfoURI: _uri
    });
    emit PetCreated(totalPetCount);    
  }
  /// @notice Public "view" method to get details of a specific Pet.
  /// @param _id ID of the pet whose details are queried.
  /// @return _id Pet's id
  /// @return _type type of pet 
  /// @return _gender gender of pet 
  /// @return _dob date of birth of pet 
  /// @return _isAlive alive status
  /// @return _forSale forSale status
  /// @return _price price of the pet 
  /// @return _previousOwner address of previous owner
  /// @return _currentOwner address of current owner
  /// @return _uri pinned image URI
  /// @notice No access control on this method. Anyone can request details of a pet.
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

  /// @notice Public method to deregister/mark-as-dead a specific Pet. This method generates PetDeleted event
  /// @param id ID of the pet to be deregistered/mark-as-dead.
  /// @notice Only Vets can de-register Pets, checked by callerIsVet modifier
  function deletePet(uint id) public callerIsVet(msg.sender){

    pets[id].isAlive = false;
    pets[id].previousOwner = pets[id].currentOwner;
    pets[id].currentOwner = payable(0x0000000000000000000000000000000000000000);
    emit PetDeleted(id);    
  }
  /// @notice Public method to update a specific Pet. This method generates PetUpdated event
  /// @param id ID of the pet to be updated
  /// @param _forSale Flag for whether the pet to be marked for sale or not
  /// @param _price The price at which Pet is to be sold 
  /// @notice Only the owner of the specific pet can update their own pets with a valid Price (>0) checked by callerIsPetOwner and validPrice modifiers
  function updatePet(uint id, bool _forSale, uint _price) public callerIsPetOwner(id) validPrice(_price){

    pets[id].forSale = _forSale;
    pets[id].price = _price;
    
    emit PetUpdated(id);    
  }
  /// @notice Public method to gift a specific Pet to someone else. This method generates PetGifted event
  /// @param id ID of the pet to be gifted
  /// @param receiver Address of the receiver to whom the pet is being gifted.
  /// @notice Only the owner of the specific pet can gift their own pets to anyone checked by callerIsPetOwner modifier
  function giftPet(uint id, address payable receiver) public callerIsPetOwner(id){

    pets[id].previousOwner = pets[id].currentOwner;
    pets[id].currentOwner = receiver;
    emit PetGifted(id);    
  }

  /// @notice Public method to buy a specific Pet. This method generates PetSold event
  /// @param id ID of the pet to be bought
  /// @notice Anyone (except the current Pet Owner) can buy a pet as long as they pay enough. Any excess is refunded. Checked by paidEnough, callerIsNotPetOwner and refundExcess modifiers.
  function buyPet(uint id) public payable forSale(id) paidEnough(pets[id].price) callerIsNotPetOwner(id) refundExcess(id){
    pets[id].previousOwner = pets[id].currentOwner;
    pets[id].currentOwner = payable(msg.sender);
    pets[id].forSale = false;
    uint _price = pets[id].price;
    pets[id].previousOwner.transfer(_price);
  
  emit PetSold(id);

  }

}