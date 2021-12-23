# Design Pattern Decisions

## AccessControlEnumerable interface

To maintain a special list of Vets (only vets are allowed to create pets or mark them as dead). OpenZelleplin's `AccessControlEnumerable` interface provides easy way to check whether the interacting address is part of a special group or not using the hasRole inbuild method. Smart contract inherits from this interface.

## Security model

Smart contract inherits from openzeppelin `Ownable` implementation to set ownership to deployer as the "Govt. agency - Vet Services". Only this account is allowed to create Vets. This allows us to use inbuilt onlyOwner modifier on the the "createVet" method without explicity saving the address of the contract initator in the constuctor.