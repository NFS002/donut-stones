/* Autogenerated file. Do not edit manually. */

/* tslint:disable */

/* eslint-disable */
import type { DonutStone, DonutStoneInterface } from "../DonutStone";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";

const _abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "Paused",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "Unpaused",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
    ],
    name: "allowance",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "decimals",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "subtractedValue",
        type: "uint256",
      },
    ],
    name: "decreaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "addedValue",
        type: "uint256",
      },
    ],
    name: "increaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "mint",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "paused",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalSupply",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transfer",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60806040523480156200001157600080fd5b506040518060400160405280600a81526020017f446f6e757453746f6e65000000000000000000000000000000000000000000008152506040518060400160405280600281526020017f44530000000000000000000000000000000000000000000000000000000000008152506200009e620000926200013260201b60201c565b6200013a60201b60201c565b8160049080519060200190620000b692919062000412565b508060059080519060200190620000cf92919062000412565b5050506000600660006101000a81548160ff0219169083151502179055506200012c3362000102620001fe60201b60201c565b600a6200011091906200064b565b620f424062000120919062000788565b6200020760201b60201c565b62000919565b600033905090565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050816000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b60006012905090565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1614156200027a576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401620002719062000521565b60405180910390fd5b6200028e600083836200038160201b60201c565b8060036000828254620002a2919062000593565b9250508190555080600160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254620002fa919062000593565b925050819055508173ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef8360405162000361919062000565565b60405180910390a36200037d60008383620003f160201b60201c565b5050565b62000399838383620003f660201b62000aaf1760201c565b620003a9620003fb60201b60201c565b15620003ec576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401620003e39062000543565b60405180910390fd5b505050565b505050565b505050565b6000600660009054906101000a900460ff16905090565b828054620004209062000800565b90600052602060002090601f01602090048101928262000444576000855562000490565b82601f106200045f57805160ff191683800117855562000490565b8280016001018555821562000490579182015b828111156200048f57825182559160200191906001019062000472565b5b5090506200049f9190620004a3565b5090565b5b80821115620004be576000816000905550600101620004a4565b5090565b6000620004d1601f8362000582565b9150620004de82620008a1565b602082019050919050565b6000620004f8602a8362000582565b91506200050582620008ca565b604082019050919050565b6200051b81620007e9565b82525050565b600060208201905081810360008301526200053c81620004c2565b9050919050565b600060208201905081810360008301526200055e81620004e9565b9050919050565b60006020820190506200057c600083018462000510565b92915050565b600082825260208201905092915050565b6000620005a082620007e9565b9150620005ad83620007e9565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff03821115620005e557620005e462000836565b5b828201905092915050565b6000808291508390505b600185111562000642578086048111156200061a576200061962000836565b5b60018516156200062a5780820291505b80810290506200063a8562000894565b9450620005fa565b94509492505050565b60006200065882620007e9565b91506200066583620007f3565b9250620006947fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff84846200069c565b905092915050565b600082620006ae576001905062000781565b81620006be576000905062000781565b8160018114620006d75760028114620006e25762000718565b600191505062000781565b60ff841115620006f757620006f662000836565b5b8360020a91508482111562000711576200071062000836565b5b5062000781565b5060208310610133831016604e8410600b8410161715620007525782820a9050838111156200074c576200074b62000836565b5b62000781565b620007618484846001620005f0565b925090508184048111156200077b576200077a62000836565b5b81810290505b9392505050565b60006200079582620007e9565b9150620007a283620007e9565b9250817fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0483118215151615620007de57620007dd62000836565b5b828202905092915050565b6000819050919050565b600060ff82169050919050565b600060028204905060018216806200081957607f821691505b6020821081141562000830576200082f62000865565b5b50919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b60008160011c9050919050565b7f45524332303a206d696e7420746f20746865207a65726f206164647265737300600082015250565b7f45524332305061757361626c653a20746f6b656e207472616e7366657220776860008201527f696c652070617573656400000000000000000000000000000000000000000000602082015250565b611c0f80620009296000396000f3fe608060405234801561001057600080fd5b50600436106101005760003560e01c806370a0823111610097578063a457c2d711610066578063a457c2d71461029f578063a9059cbb146102cf578063dd62ed3e146102ff578063f2fde38b1461032f57610100565b806370a0823114610229578063715018a6146102595780638da5cb5b1461026357806395d89b411461028157610100565b8063313ce567116100d3578063313ce567146101a157806339509351146101bf57806340c10f19146101ef5780635c975abb1461020b57610100565b806306fdde0314610105578063095ea7b31461012357806318160ddd1461015357806323b872dd14610171575b600080fd5b61010d61034b565b60405161011a91906114f6565b60405180910390f35b61013d6004803603810190610138919061126b565b6103dd565b60405161014a91906114db565b60405180910390f35b61015b6103fb565b6040516101689190611698565b60405180910390f35b61018b6004803603810190610186919061121c565b610405565b60405161019891906114db565b60405180910390f35b6101a96104fd565b6040516101b691906116b3565b60405180910390f35b6101d960048036038101906101d4919061126b565b610506565b6040516101e691906114db565b60405180910390f35b6102096004803603810190610204919061126b565b6105b2565b005b610213610684565b60405161022091906114db565b60405180910390f35b610243600480360381019061023e91906111b7565b61069b565b6040516102509190611698565b60405180910390f35b6102616106e4565b005b61026b61076c565b60405161027891906114c0565b60405180910390f35b610289610795565b60405161029691906114f6565b60405180910390f35b6102b960048036038101906102b4919061126b565b610827565b6040516102c691906114db565b60405180910390f35b6102e960048036038101906102e4919061126b565b610912565b6040516102f691906114db565b60405180910390f35b610319600480360381019061031491906111e0565b610930565b6040516103269190611698565b60405180910390f35b610349600480360381019061034491906111b7565b6109b7565b005b60606004805461035a906117c8565b80601f0160208091040260200160405190810160405280929190818152602001828054610386906117c8565b80156103d35780601f106103a8576101008083540402835291602001916103d3565b820191906000526020600020905b8154815290600101906020018083116103b657829003601f168201915b5050505050905090565b60006103f16103ea610ab4565b8484610abc565b6001905092915050565b6000600354905090565b6000610412848484610c87565b6000600260008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600061045d610ab4565b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050828110156104dd576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016104d4906115b8565b60405180910390fd5b6104f1856104e9610ab4565b858403610abc565b60019150509392505050565b60006012905090565b60006105a8610513610ab4565b848460026000610521610ab4565b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008873ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020546105a391906116ea565b610abc565b6001905092915050565b6105ba610ab4565b73ffffffffffffffffffffffffffffffffffffffff166105d861076c565b73ffffffffffffffffffffffffffffffffffffffff161461062e576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610625906115d8565b60405180910390fd5b610636610684565b15610676576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161066d90611598565b60405180910390fd5b6106808282610f0b565b5050565b6000600660009054906101000a900460ff16905090565b6000600160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b6106ec610ab4565b73ffffffffffffffffffffffffffffffffffffffff1661070a61076c565b73ffffffffffffffffffffffffffffffffffffffff1614610760576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610757906115d8565b60405180910390fd5b61076a600061106c565b565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b6060600580546107a4906117c8565b80601f01602080910402602001604051908101604052809291908181526020018280546107d0906117c8565b801561081d5780601f106107f25761010080835404028352916020019161081d565b820191906000526020600020905b81548152906001019060200180831161080057829003601f168201915b5050505050905090565b60008060026000610836610ab4565b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050828110156108f3576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016108ea90611638565b60405180910390fd5b6109076108fe610ab4565b85858403610abc565b600191505092915050565b600061092661091f610ab4565b8484610c87565b6001905092915050565b6000600260008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905092915050565b6109bf610ab4565b73ffffffffffffffffffffffffffffffffffffffff166109dd61076c565b73ffffffffffffffffffffffffffffffffffffffff1614610a33576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610a2a906115d8565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415610aa3576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610a9a90611538565b60405180910390fd5b610aac8161106c565b50565b505050565b600033905090565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161415610b2c576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610b2390611618565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415610b9c576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610b9390611558565b60405180910390fd5b80600260008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92583604051610c7a9190611698565b60405180910390a3505050565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161415610cf7576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610cee906115f8565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415610d67576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610d5e90611518565b60405180910390fd5b610d72838383611130565b6000600160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905081811015610df9576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610df090611578565b60405180910390fd5b818103600160008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208190555081600160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254610e8e91906116ea565b925050819055508273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef84604051610ef29190611698565b60405180910390a3610f05848484611188565b50505050565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415610f7b576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610f7290611658565b60405180910390fd5b610f8760008383611130565b8060036000828254610f9991906116ea565b9250508190555080600160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254610fef91906116ea565b925050819055508173ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef836040516110549190611698565b60405180910390a361106860008383611188565b5050565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050816000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b61113b838383610aaf565b611143610684565b15611183576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161117a90611678565b60405180910390fd5b505050565b505050565b60008135905061119c81611bab565b92915050565b6000813590506111b181611bc2565b92915050565b6000602082840312156111c957600080fd5b60006111d78482850161118d565b91505092915050565b600080604083850312156111f357600080fd5b60006112018582860161118d565b92505060206112128582860161118d565b9150509250929050565b60008060006060848603121561123157600080fd5b600061123f8682870161118d565b93505060206112508682870161118d565b9250506040611261868287016111a2565b9150509250925092565b6000806040838503121561127e57600080fd5b600061128c8582860161118d565b925050602061129d858286016111a2565b9150509250929050565b6112b081611740565b82525050565b6112bf81611752565b82525050565b60006112d0826116ce565b6112da81856116d9565b93506112ea818560208601611795565b6112f381611858565b840191505092915050565b600061130b6023836116d9565b915061131682611869565b604082019050919050565b600061132e6026836116d9565b9150611339826118b8565b604082019050919050565b60006113516022836116d9565b915061135c82611907565b604082019050919050565b60006113746026836116d9565b915061137f82611956565b604082019050919050565b60006113976010836116d9565b91506113a2826119a5565b602082019050919050565b60006113ba6028836116d9565b91506113c5826119ce565b604082019050919050565b60006113dd6020836116d9565b91506113e882611a1d565b602082019050919050565b60006114006025836116d9565b915061140b82611a46565b604082019050919050565b60006114236024836116d9565b915061142e82611a95565b604082019050919050565b60006114466025836116d9565b915061145182611ae4565b604082019050919050565b6000611469601f836116d9565b915061147482611b33565b602082019050919050565b600061148c602a836116d9565b915061149782611b5c565b604082019050919050565b6114ab8161177e565b82525050565b6114ba81611788565b82525050565b60006020820190506114d560008301846112a7565b92915050565b60006020820190506114f060008301846112b6565b92915050565b6000602082019050818103600083015261151081846112c5565b905092915050565b60006020820190508181036000830152611531816112fe565b9050919050565b6000602082019050818103600083015261155181611321565b9050919050565b6000602082019050818103600083015261157181611344565b9050919050565b6000602082019050818103600083015261159181611367565b9050919050565b600060208201905081810360008301526115b18161138a565b9050919050565b600060208201905081810360008301526115d1816113ad565b9050919050565b600060208201905081810360008301526115f1816113d0565b9050919050565b60006020820190508181036000830152611611816113f3565b9050919050565b6000602082019050818103600083015261163181611416565b9050919050565b6000602082019050818103600083015261165181611439565b9050919050565b600060208201905081810360008301526116718161145c565b9050919050565b600060208201905081810360008301526116918161147f565b9050919050565b60006020820190506116ad60008301846114a2565b92915050565b60006020820190506116c860008301846114b1565b92915050565b600081519050919050565b600082825260208201905092915050565b60006116f58261177e565b91506117008361177e565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff03821115611735576117346117fa565b5b828201905092915050565b600061174b8261175e565b9050919050565b60008115159050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b600060ff82169050919050565b60005b838110156117b3578082015181840152602081019050611798565b838111156117c2576000848401525b50505050565b600060028204905060018216806117e057607f821691505b602082108114156117f4576117f3611829565b5b50919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b6000601f19601f8301169050919050565b7f45524332303a207472616e7366657220746f20746865207a65726f206164647260008201527f6573730000000000000000000000000000000000000000000000000000000000602082015250565b7f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160008201527f6464726573730000000000000000000000000000000000000000000000000000602082015250565b7f45524332303a20617070726f766520746f20746865207a65726f20616464726560008201527f7373000000000000000000000000000000000000000000000000000000000000602082015250565b7f45524332303a207472616e7366657220616d6f756e742065786365656473206260008201527f616c616e63650000000000000000000000000000000000000000000000000000602082015250565b7f5061757361626c653a2070617573656400000000000000000000000000000000600082015250565b7f45524332303a207472616e7366657220616d6f756e742065786365656473206160008201527f6c6c6f77616e6365000000000000000000000000000000000000000000000000602082015250565b7f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572600082015250565b7f45524332303a207472616e736665722066726f6d20746865207a65726f20616460008201527f6472657373000000000000000000000000000000000000000000000000000000602082015250565b7f45524332303a20617070726f76652066726f6d20746865207a65726f2061646460008201527f7265737300000000000000000000000000000000000000000000000000000000602082015250565b7f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f7760008201527f207a65726f000000000000000000000000000000000000000000000000000000602082015250565b7f45524332303a206d696e7420746f20746865207a65726f206164647265737300600082015250565b7f45524332305061757361626c653a20746f6b656e207472616e7366657220776860008201527f696c652070617573656400000000000000000000000000000000000000000000602082015250565b611bb481611740565b8114611bbf57600080fd5b50565b611bcb8161177e565b8114611bd657600080fd5b5056fea26469706673582212202f6feca670c465c0dea0bf46f5c5ea115295a290688f83d5f03de593bf3783b464736f6c63430008040033";

export class DonutStone__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<DonutStone> {
    return super.deploy(overrides || {}) as Promise<DonutStone>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): DonutStone {
    return super.attach(address) as DonutStone;
  }
  connect(signer: Signer): DonutStone__factory {
    return super.connect(signer) as DonutStone__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): DonutStoneInterface {
    return new utils.Interface(_abi) as DonutStoneInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): DonutStone {
    return new Contract(address, _abi, signerOrProvider) as DonutStone;
  }
}