# Final Project Idea

A DAPP called "PetWorld" - where
1. ONLY Government/VetServices can register Vets (de-registering vets is out of scope).
2. ONLY Vets can register pets (when they insert a chip).
3. ONLY Vets can de-register pets (mark them as dead). They can de-regiter any pet.
4. Owners can gift their pets to others for free.
5. Anyone can buy a pet which they currently down own, is alive and is available for sale.
6. Only current pet owners can update their pet details to set a price and enable/disable them for sale.


Front end URL: <TBD>


# How to run local tests

1. Ensure truffle, node and ganache are installed.
2. npm install @openzeppelin/contracts
3. Ensure Ganache is running at http://127.0.0.1:7545. Port for local test net : 7545
4. cd to the directory where the code is cloned
5. Run "truffle test" - all unit tests (21) should ideally pass.
6. Run "truffle migrate"
7. Run "truffle deploy"
8. Open project in VS Code, locate web/index.html (right click on it and select "Open with Live Server")