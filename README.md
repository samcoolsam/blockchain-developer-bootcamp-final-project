# Final Project Idea

A DAPP called "PetWorld" - where
1. ONLY Government/VetServices can register Vets (de-registering vets is out of scope).
2. ONLY Vets can register pets (when they insert a chip).
3. ONLY Vets can de-register pets (mark them as dead). They can de-regiter any pet.
4. Owners can gift their pets to others for free.
5. Anyone can buy a pet which they currently don't own, is alive and is available for sale.
6. The moment a pet is sold, its previous owner and current owner details are updated and it's marked as "not for sale".
7. Only current pet owners can update their pet details to set a price and enable/disable them for sale.

# Directory Structure
- contracts - Contains PetWorld.sol (main contract)
- migrations - Contains migration and deployment js file
- test - contains PetWorld.test.js - the main file where the unit tests exists.
- web - contains the index.html (the main front end file) with supporting dapp.js and main.css


# Front end URL: 
- https://61c4a6b0b5ffa3f1b95635df--elegant-rosalind-0390a4.netlify.app/

# Video Recording of working project on Ropsten: 

- https://youtu.be/C09wfVEKbgQ

# Account to recieve certificate as NFT : 

- Address: 0xE4449F724b7c71cF5E9c25DB3E378A327Df57308

- Please also do send the certificate via email bakshi.sameer@gmail.com


# How to run local tests

1. Ensure truffle, node and ganache are installed.
2. npm install @openzeppelin/contracts
3. npm install @truffle/hdwallet-provider
4. Ensure Ganache is running at http://127.0.0.1:7545. Port for local test net : 7545
5. cd to the directory where the code is cloned
6. Run "truffle test" - all unit tests (21) should ideally pass.
7. Run "truffle migrate"
8. Run "truffle deploy"
9. Open project in VS Code, locate web/index.html (right click on it and select "Open with Live Server")
10. Configure the addresses in Metamask (as mentioned in deployed_addresses.txt) file.
11. Watch the online video as training exercise to understand the capabilities of the system.
12. Have fun and play with the locally deployed smart contract.