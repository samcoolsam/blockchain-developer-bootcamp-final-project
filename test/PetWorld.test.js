let BN = web3.utils.BN;
let { catchRevert } = require("./exceptionsHelpers.js");
const { isTypedArray } = require("util/types");
const _deploy_contracts = require("../migrations/2_deploy_contracts");

let PetWorld = artifacts.require("PetWorld");

contract("PetWorld", function(accounts){

    const [_vetSociety, vet1, vet2, owner1, owner2, owner3, buyer1, buyer2] = accounts;

    let instance;

    beforeEach(async () => {
        instance = await PetWorld.new({from: _vetSociety});
      });

    describe("Vet Creation - Use Cases", ()=>{

      it("should allow vet society to create vets", async () => {
        await instance.registerVet(vet1,{from:_vetSociety});
        const VETS_ROLE = web3.utils.soliditySha3("VETS_ROLE");
         //const vetsCount = await instance.getRoleMemberCount(VETS_ROLE);
        returnAddress = await instance.getRoleMember(VETS_ROLE,0);
        assert.equal(returnAddress.toLowerCase(),vet1.toLowerCase(),"UNABLE to register Vets");
      });

      it("should emit a VetCreated event when a Vet is created", async () => {
        let eventEmitted = false;
        const tx = await instance.registerVet(vet1,{from:_vetSociety});
        if (tx.logs[1].event == "VetCreated") {
          eventEmitted = true;
        }
        assert.equal(
          eventEmitted,
          true,
          "adding an vet should emit a VetCreated event",
        );
      });

      it("should NOT allow anyone except vet society to create vets", async () => {
        await catchRevert(instance.registerVet(vet1,{from:vet2}));
      });
    });

    describe("Pet Creation - Use Cases", ()=>{

      it("should allow vets to create a pet", async () => {
        await instance.registerVet(vet1,{from:_vetSociety});
        await instance.registerPet(PetWorld.PetType.Dog,PetWorld.Gender.Male,"01-JAN-2001",owner1,"http://dummyurl", {from:vet1});
        const tx = await instance.getPet(1);
        assert.equal(
          tx._id,
          1,
          "the id of the last added pet does not match the expected value",
        );
        assert.equal(
          tx._type,
          PetWorld.PetType.Dog,
          "the type of the last added pet does not match the expected value",
        );
        assert.equal(
          tx._gender,
          PetWorld.Gender.Male,
          "the gender of the last added pet does not match the expected value",
        );
        assert.equal(
          tx._dob,
          "01-JAN-2001",
          "the DoB of the last added pet does not match the expected value",
        );
        assert.equal(
          tx._isAlive,
          true,
          "the isAlive status of the last added pet does not match the expected value",
        );
        assert.equal(
          tx._forSale,
          false,
          "the forSale status of the last added pet does not match the expected value",
        );
        assert.equal(
          tx._price,
          0,
          "the price of the last added pet does not match the expected value",
        );
        assert.equal(
          tx._currentOwner,
          owner1,
          "the currentOwner of the last added pet does not match the expected value",
        );
        assert.equal(
          tx._previousOwner,
          0x0000000000000000000000000000000000000000,
          "the previousOwner of the last added pet does not match the expected value",
        );
        assert.equal(
          tx._uri,
          "http://dummyurl",
          "the offchainURI of the last added pet does not match the expected value",
        );
      });

      it("should emit a PetCreated event when a Pet is created", async () => {
        let eventEmitted = false;
        await instance.registerVet(vet1,{from:_vetSociety});
        const tx = await instance.registerPet(PetWorld.PetType.Dog,PetWorld.Gender.Male,"01-JAN-2001",owner1,"http://dummyurl", {from:vet1});
  
        if (tx.logs[0].event == "PetCreated") {
          eventEmitted = true;
        }
        assert.equal(
          eventEmitted,
          true,
          "adding an pet should emit a PetCreated event",
        );
      });

      it("should NOT allow anyone except vet to register a pet", async () => {
        await catchRevert(instance.registerPet(PetWorld.PetType.Dog,PetWorld.Gender.Male,"01-JAN-2001",owner1,"http://dummyurl", {from:owner2}));
      });
    });


    describe("Pet Deletion - Use Cases", ()=>{

      it("should allow vets to delete a pet - mark as dead", async () => {
        await instance.registerVet(vet1,{from:_vetSociety});
        await instance.registerPet(PetWorld.PetType.Dog,PetWorld.Gender.Male,"01-JAN-2001",owner1,"http://dummyurl", {from:vet1});
        await instance.deletePet(1,{from:vet1});
        const tx = await instance.getPet(1);
        assert.equal(
          tx._id,
          1,
          "the id of the dead pet does not match the expected value",
        );
        assert.equal(
          tx._type,
          PetWorld.PetType.Dog,
          "the type of the dead pet does not match the expected value",
        );
        assert.equal(
          tx._gender,
          PetWorld.Gender.Male,
          "the gender of the dead pet does not match the expected value",
        );
        assert.equal(
          tx._dob,
          "01-JAN-2001",
          "the DoB of the dead pet does not match the expected value",
        );
        assert.equal(
          tx._isAlive,
          false,
          "the isAlive status of the dead pet does not match the expected value",
        );
        assert.equal(
          tx._forSale,
          false,
          "the forSale status of the dead pet does not match the expected value",
        );
        assert.equal(
          tx._price,
          0,
          "the price of the last dead does not match the expected value",
        );
        assert.equal(
          tx._currentOwner,
          0x0000000000000000000000000000000000000000,
          "the currentOwner of the last dead does not match the expected value",
        );
        assert.equal(
          tx._previousOwner,
          owner1,
          "the previousOwner of the dead pet does not match the expected value",
        );
        assert.equal(
          tx._uri,
          "http://dummyurl",
          "the offchainURI of the last added pet does not match the expected value",
        );
      });

      it("should allow ANY vet to delete a pet - mark as dead", async () => {
        await instance.registerVet(vet1,{from:_vetSociety});
        await instance.registerVet(vet2,{from:_vetSociety});
        await instance.registerPet(PetWorld.PetType.Dog,PetWorld.Gender.Male,"01-JAN-2001",owner1,"http://dummyurl", {from:vet1});
        await instance.deletePet(1,{from:vet2});
        const tx = await instance.getPet(1);
        assert.equal(
          tx._id,
          1,
          "the id of the dead pet does not match the expected value",
        );
        assert.equal(
          tx._type,
          PetWorld.PetType.Dog,
          "the type of the dead pet does not match the expected value",
        );
        assert.equal(
          tx._gender,
          PetWorld.Gender.Male,
          "the gender of the dead pet does not match the expected value",
        );
        assert.equal(
          tx._dob,
          "01-JAN-2001",
          "the DoB of the dead pet does not match the expected value",
        );
        assert.equal(
          tx._isAlive,
          false,
          "the isAlive status of the dead pet does not match the expected value",
        );
        assert.equal(
          tx._forSale,
          false,
          "the forSale status of the dead pet does not match the expected value",
        );
        assert.equal(
          tx._price,
          0,
          "the price of the last dead does not match the expected value",
        );
        assert.equal(
          tx._currentOwner,
          0x0000000000000000000000000000000000000000,
          "the currentOwner of the last dead does not match the expected value",
        );
        assert.equal(
          tx._previousOwner,
          owner1,
          "the previousOwner of the dead pet does not match the expected value",
        );
        assert.equal(
          tx._uri,
          "http://dummyurl",
          "the offchainURI of the last added pet does not match the expected value",
        );
      });

      it("should emit a PetDeleted event when a Pet is Deleted - dies", async () => {
        let eventEmitted = false;
        await instance.registerVet(vet1,{from:_vetSociety});
        await instance.registerPet(PetWorld.PetType.Dog,PetWorld.Gender.Male,"01-JAN-2001",owner1,"http://dummyurl", {from:vet1});
        const tx = await instance.deletePet(1,{from:vet1});
  
        if (tx.logs[0].event == "PetDeleted") {
          eventEmitted = true;
        }
        assert.equal(
          eventEmitted,
          true,
          "deleting a pet should emit a PetDeleted event",
        );
      });

      it("should NOT allow anyone except vet to delete a pet", async () => {
        await instance.registerVet(vet1,{from:_vetSociety});
        await instance.registerPet(PetWorld.PetType.Dog,PetWorld.Gender.Male,"01-JAN-2001",owner1,"http://dummyurl", {from:vet1});
        await catchRevert(instance.deletePet(1, {from:owner1}));
      });
    });


    describe("Pet Updating - Use Cases", ()=>{

      it("should allow owners to mark the pets for sale and set a valid price", async () => {
        await instance.registerVet(vet1,{from:_vetSociety});
        await instance.registerPet(PetWorld.PetType.Dog,PetWorld.Gender.Male,"01-JAN-2001",owner1,"http://dummyurl", {from:vet1});
        await instance.updatePet(1,true,10,{from:owner1});
        const tx = await instance.getPet(1);
        assert.equal(
          tx._id,
          1,
          "the id of the updated pet not match the expected value",
        );
        assert.equal(
          tx._type,
          PetWorld.PetType.Dog,
          "the type of the updated pet does not match the expected value",
        );
        assert.equal(
          tx._gender,
          PetWorld.Gender.Male,
          "the gender of the updated pet does not match the expected value",
        );
        assert.equal(
          tx._dob,
          "01-JAN-2001",
          "the DoB of the updated pet does not match the expected value",
        );
        assert.equal(
          tx._isAlive,
          true,
          "the isAlive status of the updated pet does not match the expected value",
        );
        assert.equal(
          tx._forSale,
          true,
          "the forSale status of the updated pet does not match the expected value",
        );
        assert.equal(
          tx._price,
          10,
          "the price of the updated does not match the expected value",
        );
        assert.equal(
          tx._currentOwner,
          owner1,
          "the currentOwner of the updated does not match the expected value",
        );
        assert.equal(
          tx._previousOwner,
          0x0000000000000000000000000000000000000000,
          "the previousOwner of the updated pet does not match the expected value",
        );
        assert.equal(
          tx._uri,
          "http://dummyurl",
          "the offchainURI of the updated pet does not match the expected value",
        );
      });

      it("should emit a PetUpdated event when a Pet is Updated", async () => {
        let eventEmitted = false;
        await instance.registerVet(vet1,{from:_vetSociety});
        await instance.registerPet(PetWorld.PetType.Dog,PetWorld.Gender.Male,"01-JAN-2001",owner1,"http://dummyurl", {from:vet1});
        const tx = await instance.updatePet(1,true,10,{from:owner1});
  
        if (tx.logs[0].event == "PetUpdated") {
          eventEmitted = true;
        }
        assert.equal(
          eventEmitted,
          true,
          "updating a pet should emit a PetUpdated event",
        );
      });

      it("should NOT allow anyone except current owner to update a pet", async () => {
        await instance.registerVet(vet1,{from:_vetSociety});
        await instance.registerPet(PetWorld.PetType.Dog,PetWorld.Gender.Male,"01-JAN-2001",owner1,"http://dummyurl", {from:vet1});
        await catchRevert(instance.updatePet(1,true,10, {from:owner2}));
      });
    });

    describe("Pet Gifting - Use Cases", ()=>{

      it("should allow owners to gift their pets to others for FREE", async () => {
        await instance.registerVet(vet1,{from:_vetSociety});
        await instance.registerPet(PetWorld.PetType.Dog,PetWorld.Gender.Male,"01-JAN-2001",owner1,"http://dummyurl", {from:vet1});
        await instance.giftPet(1,owner2,{from:owner1});
        const tx = await instance.getPet(1);
        assert.equal(
          tx._id,
          1,
          "the id of the gifted pet not match the expected value",
        );
        assert.equal(
          tx._type,
          PetWorld.PetType.Dog,
          "the type of the gifted pet does not match the expected value",
        );
        assert.equal(
          tx._gender,
          PetWorld.Gender.Male,
          "the gender of the gifted pet does not match the expected value",
        );
        assert.equal(
          tx._dob,
          "01-JAN-2001",
          "the DoB of the gifted pet does not match the expected value",
        );
        assert.equal(
          tx._isAlive,
          true,
          "the isAlive status of the gifted pet does not match the expected value",
        );
        assert.equal(
          tx._forSale,
          false,
          "the forSale status of the gifted pet does not match the expected value",
        );
        assert.equal(
          tx._price,
          0,
          "the price of the gifted does not match the expected value",
        );
        assert.equal(
          tx._currentOwner,
          owner2,
          "the currentOwner of the gifted does not match the expected value",
        );
        assert.equal(
          tx._previousOwner,
          owner1,
          "the previousOwner of the gifted pet does not match the expected value",
        );
        assert.equal(
          tx._uri,
          "http://dummyurl",
          "the offchainURI of the gifted pet does not match the expected value",
        );
      });

      it("should emit a PetGifted event when a Pet is Gifted", async () => {
        let eventEmitted = false;
        await instance.registerVet(vet1,{from:_vetSociety});
        await instance.registerPet(PetWorld.PetType.Dog,PetWorld.Gender.Male,"01-JAN-2001",owner1,"http://dummyurl", {from:vet1});
        const tx = await instance.giftPet(1,owner2,{from:owner1});
  
        if (tx.logs[0].event == "PetGifted") {
          eventEmitted = true;
        }
        assert.equal(
          eventEmitted,
          true,
          "gifting a pet should emit a PetGifted event",
        );
      });

      it("should NOT allow anyone except current owner to gift a pet", async () => {
        await instance.registerVet(vet1,{from:_vetSociety});
        await instance.registerPet(PetWorld.PetType.Dog,PetWorld.Gender.Male,"01-JAN-2001",owner1,"http://dummyurl", {from:vet1});
        await catchRevert(instance.giftPet(1,owner3, {from:owner2}));
      });
    });

    describe("Pet Buying - Use Cases", ()=>{

      it("should allow purchase of pets", async () => {
        await instance.registerVet(vet1,{from:_vetSociety});
        await instance.registerPet(PetWorld.PetType.Dog,PetWorld.Gender.Male,"01-JAN-2001",owner1,"http://dummyurl", {from:vet1});
        await instance.updatePet(1,true,10,{from:owner1});
        await instance.buyPet(1,{from:owner2, value:20});
        const tx = await instance.getPet(1);
        assert.equal(
          tx._id,
          1,
          "the id of the purchased pet not match the expected value",
        );
        assert.equal(
          tx._type,
          PetWorld.PetType.Dog,
          "the type of the purchased pet does not match the expected value",
        );
        assert.equal(
          tx._gender,
          PetWorld.Gender.Male,
          "the gender of the purchased pet does not match the expected value",
        );
        assert.equal(
          tx._dob,
          "01-JAN-2001",
          "the DoB of the purchased pet does not match the expected value",
        );
        assert.equal(
          tx._isAlive,
          true,
          "the isAlive status of the purchased pet does not match the expected value",
        );
        assert.equal(
          tx._forSale,
          false,
          "the forSale status of the purchased pet does not match the expected value",
        );
        assert.equal(
          tx._price,
          10,
          "the price of the purchased does not match the expected value",
        );
        assert.equal(
          tx._currentOwner,
          owner2,
          "the currentOwner of the purchased does not match the expected value",
        );
        assert.equal(
          tx._previousOwner,
          owner1,
          "the previousOwner of the purchased pet does not match the expected value",
        );
        assert.equal(
          tx._uri,
          "http://dummyurl",
          "the offchainURI of the purchased pet does not match the expected value",
        );
      });

      it("should emit a PetSold event when a Pet is Sold", async () => {
        let eventEmitted = false;
        await instance.registerVet(vet1,{from:_vetSociety});
        await instance.registerPet(PetWorld.PetType.Dog,PetWorld.Gender.Male,"01-JAN-2001",owner1,"http://dummyurl", {from:vet1});
        await instance.updatePet(1,true,10,{from:owner1});
        const tx = await instance.buyPet(1,{from:owner2, value:20});
  
        if (tx.logs[0].event == "PetSold") {
          eventEmitted = true;
        }
        assert.equal(
          eventEmitted,
          true,
          "buying a pet should emit a PetSold event",
        );
      });

      it("should NOT allow current owner to buy their own pet", async () => {
        await instance.registerVet(vet1,{from:_vetSociety});
        await instance.registerPet(PetWorld.PetType.Dog,PetWorld.Gender.Male,"01-JAN-2001",owner1,"http://dummyurl", {from:vet1});
        await instance.updatePet(1,true,10,{from:owner1});
        await catchRevert(instance.buyPet(1,{from:owner1, value:20}));
      });

      it("should NOT allow anyone to buy paying less than asking price", async () => {
        await instance.registerVet(vet1,{from:_vetSociety});
        await instance.registerPet(PetWorld.PetType.Dog,PetWorld.Gender.Male,"01-JAN-2001",owner1,"http://dummyurl", {from:vet1});
        await instance.updatePet(1,true,10,{from:owner1});
        await catchRevert(instance.buyPet(1,{from:owner2, value:9}));
      });

      it("should update balances of buyer and seller correctly", async () => {
        await instance.registerVet(vet1,{from:_vetSociety});
        await instance.registerPet(PetWorld.PetType.Dog,PetWorld.Gender.Male,"01-JAN-2001",owner1,"http://dummyurl", {from:vet1});
        await instance.updatePet(1,true,10,{from:owner1});

        var owner1BalanceBefore = await web3.eth.getBalance(owner1);
        var owner2BalanceBefore = await web3.eth.getBalance(owner2);

        await instance.buyPet(1,{from:owner2, value:20});

        var owner1BalanceAfter = await web3.eth.getBalance(owner1);
        var owner2BalanceAfter = await web3.eth.getBalance(owner2);

        assert.equal(
          new BN(owner1BalanceAfter).toString(),
          new BN(owner1BalanceBefore).add(new BN(10)).toString(),
          "Owner 1's balance should be increased by the price of the item",
        );

        assert.isBelow(
          Number(owner2BalanceAfter),
          Number(new BN(owner2BalanceBefore).sub(new BN(10))),
          "Owner 2's balance should be reduced by more than the price of the item (including gas costs)",
        );

      });



    });

});