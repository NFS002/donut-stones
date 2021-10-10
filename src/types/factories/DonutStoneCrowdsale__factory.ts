/* Autogenerated file. Do not edit manually. */

/* tslint:disable */

/* eslint-disable */
import type {
  DonutStoneCrowdsale,
  DonutStoneCrowdsaleInterface,
} from "../DonutStoneCrowdsale";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import {
  Signer,
  utils,
  BigNumberish,
  Contract,
  ContractFactory,
  Overrides,
} from "ethers";

const _abi = [
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_rate",
        type: "uint256",
      },
      {
        internalType: "address payable",
        name: "_wallet",
        type: "address",
      },
      {
        internalType: "contract ERC20",
        name: "_token",
        type: "address",
      },
      {
        internalType: "address",
        name: "_tokenWallet",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "purchaser",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "beneficiary",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "TokensPurchased",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "beneficiary",
        type: "address",
      },
    ],
    name: "buyTokens",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [],
    name: "rate",
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
    name: "remainingTokens",
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
    name: "token",
    outputs: [
      {
        internalType: "contract IERC20",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "tokenWallet",
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
    name: "wallet",
    outputs: [
      {
        internalType: "address payable",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "weiRaised",
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
    stateMutability: "payable",
    type: "receive",
  },
];

const _bytecode =
  "0x60806040523480156200001157600080fd5b506040516200183238038062001832833981810160405281019062000037919062000316565b8084848460016000819055506000831162000089576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401620000809062000462565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415620000fc576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401620000f39062000484565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614156200016f576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401620001669062000440565b60405180910390fd5b8260038190555081600260006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555080600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550505050600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614156200026e576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040162000265906200041e565b60405180910390fd5b80600560006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050505050506200069b565b600081519050620002cb8162000633565b92915050565b600081519050620002e2816200064d565b92915050565b600081519050620002f98162000667565b92915050565b600081519050620003108162000681565b92915050565b600080600080608085870312156200032d57600080fd5b60006200033d87828801620002ff565b94505060206200035087828801620002d1565b93505060406200036387828801620002e8565b92505060606200037687828801620002ba565b91505092959194509250565b600062000391603483620004a6565b91506200039e826200051d565b604082019050919050565b6000620003b8602483620004a6565b9150620003c5826200056c565b604082019050919050565b6000620003df601483620004a6565b9150620003ec82620005bb565b602082019050919050565b600062000406602583620004a6565b91506200041382620005e4565b604082019050919050565b60006020820190508181036000830152620004398162000382565b9050919050565b600060208201905081810360008301526200045b81620003a9565b9050919050565b600060208201905081810360008301526200047d81620003d0565b9050919050565b600060208201905081810360008301526200049f81620003f7565b9050919050565b600082825260208201905092915050565b6000620004c482620004f3565b9050919050565b6000620004d882620004f3565b9050919050565b6000620004ec82620004b7565b9050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b7f416c6c6f77616e636543726f776473616c653a20746f6b656e2077616c6c657460008201527f20697320746865207a65726f2061646472657373000000000000000000000000602082015250565b7f43726f776473616c653a20746f6b656e20697320746865207a65726f2061646460008201527f7265737300000000000000000000000000000000000000000000000000000000602082015250565b7f43726f776473616c653a20726174652069732030000000000000000000000000600082015250565b7f43726f776473616c653a2077616c6c657420697320746865207a65726f20616460008201527f6472657373000000000000000000000000000000000000000000000000000000602082015250565b6200063e81620004b7565b81146200064a57600080fd5b50565b6200065881620004cb565b81146200066457600080fd5b50565b6200067281620004df565b81146200067e57600080fd5b50565b6200068c8162000513565b81146200069857600080fd5b50565b61118780620006ab6000396000f3fe6080604052600436106100745760003560e01c8063bf5839031161004e578063bf58390314610111578063bff99c6c1461013c578063ec8ac4d814610167578063fc0c546a146101835761008b565b80632c4e722e146100905780634042b66f146100bb578063521eb273146100e65761008b565b3661008b576100896100846101ae565b6101b6565b005b600080fd5b34801561009c57600080fd5b506100a56102d5565b6040516100b29190610d8d565b60405180910390f35b3480156100c757600080fd5b506100d06102df565b6040516100dd9190610d8d565b60405180910390f35b3480156100f257600080fd5b506100fb6102e9565b6040516101089190610c15565b60405180910390f35b34801561011d57600080fd5b50610126610313565b6040516101339190610d8d565b60405180910390f35b34801561014857600080fd5b50610151610488565b60405161015e9190610bfa565b60405180910390f35b610181600480360381019061017c91906109f0565b6101b6565b005b34801561018f57600080fd5b506101986104b2565b6040516101a59190610c90565b60405180910390f35b600033905090565b600260005414156101fc576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016101f390610d4d565b60405180910390fd5b6002600081905550600034905061021382826104dc565b600061021e826104ea565b90508160045461022e9190610e03565b60048190555061023e8382610501565b8273ffffffffffffffffffffffffffffffffffffffff1661025d6101ae565b73ffffffffffffffffffffffffffffffffffffffff167f6faf93231a456e552dbc9961f58d9713ee4f2e69d15f1975b050ef0911053a7b84846040516102a4929190610da8565b60405180910390a36102b6838361050f565b6102be610513565b6102c8838361057e565b5050600160008190555050565b6000600354905090565b6000600454905090565b6000600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b60006104836103206104b2565b73ffffffffffffffffffffffffffffffffffffffff166370a08231600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff166040518263ffffffff1660e01b815260040161037a9190610bfa565b60206040518083038186803b15801561039257600080fd5b505afa1580156103a6573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906103ca9190610a42565b6103d26104b2565b73ffffffffffffffffffffffffffffffffffffffff1663dd62ed3e600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16306040518363ffffffff1660e01b815260040161042e929190610c30565b60206040518083038186803b15801561044657600080fd5b505afa15801561045a573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061047e9190610a42565b610582565b905090565b6000600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b6000600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b6104e6828261059b565b5050565b6000600354826104fa9190610e59565b9050919050565b61050b8282610653565b5050565b5050565b600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166108fc349081150290604051600060405180830381858888f1935050505015801561057b573d6000803e3d6000fd5b50565b5050565b60008183106105915781610593565b825b905092915050565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16141561060b576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161060290610ced565b60405180910390fd5b600081141561064f576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161064690610d6d565b60405180910390fd5b5050565b61065d8282610661565b5050565b6106b7600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1683836106916104b2565b73ffffffffffffffffffffffffffffffffffffffff166106bb909392919063ffffffff16565b5050565b61073e846323b872dd60e01b8585856040516024016106dc93929190610c59565b604051602081830303815290604052907bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff8381831617835250505050610744565b50505050565b60006107a6826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c65648152508573ffffffffffffffffffffffffffffffffffffffff1661080b9092919063ffffffff16565b905060008151111561080657808060200190518101906107c69190610a19565b610805576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016107fc90610d2d565b60405180910390fd5b5b505050565b606061081a8484600085610823565b90509392505050565b606082471015610868576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161085f90610ccd565b60405180910390fd5b61087185610937565b6108b0576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016108a790610d0d565b60405180910390fd5b6000808673ffffffffffffffffffffffffffffffffffffffff1685876040516108d99190610be3565b60006040518083038185875af1925050503d8060008114610916576040519150601f19603f3d011682016040523d82523d6000602084013e61091b565b606091505b509150915061092b82828661094a565b92505050949350505050565b600080823b905060008111915050919050565b6060831561095a578290506109aa565b60008351111561096d5782518084602001fd5b816040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016109a19190610cab565b60405180910390fd5b9392505050565b6000813590506109c08161110c565b92915050565b6000815190506109d581611123565b92915050565b6000815190506109ea8161113a565b92915050565b600060208284031215610a0257600080fd5b6000610a10848285016109b1565b91505092915050565b600060208284031215610a2b57600080fd5b6000610a39848285016109c6565b91505092915050565b600060208284031215610a5457600080fd5b6000610a62848285016109db565b91505092915050565b610a7481610ec5565b82525050565b610a8381610eb3565b82525050565b6000610a9482610dd1565b610a9e8185610de7565b9350610aae818560208601610f31565b80840191505092915050565b610ac381610f0d565b82525050565b6000610ad482610ddc565b610ade8185610df2565b9350610aee818560208601610f31565b610af781610f93565b840191505092915050565b6000610b0f602683610df2565b9150610b1a82610fa4565b604082019050919050565b6000610b32602a83610df2565b9150610b3d82610ff3565b604082019050919050565b6000610b55601d83610df2565b9150610b6082611042565b602082019050919050565b6000610b78602a83610df2565b9150610b838261106b565b604082019050919050565b6000610b9b601f83610df2565b9150610ba6826110ba565b602082019050919050565b6000610bbe601983610df2565b9150610bc9826110e3565b602082019050919050565b610bdd81610f03565b82525050565b6000610bef8284610a89565b915081905092915050565b6000602082019050610c0f6000830184610a7a565b92915050565b6000602082019050610c2a6000830184610a6b565b92915050565b6000604082019050610c456000830185610a7a565b610c526020830184610a7a565b9392505050565b6000606082019050610c6e6000830186610a7a565b610c7b6020830185610a7a565b610c886040830184610bd4565b949350505050565b6000602082019050610ca56000830184610aba565b92915050565b60006020820190508181036000830152610cc58184610ac9565b905092915050565b60006020820190508181036000830152610ce681610b02565b9050919050565b60006020820190508181036000830152610d0681610b25565b9050919050565b60006020820190508181036000830152610d2681610b48565b9050919050565b60006020820190508181036000830152610d4681610b6b565b9050919050565b60006020820190508181036000830152610d6681610b8e565b9050919050565b60006020820190508181036000830152610d8681610bb1565b9050919050565b6000602082019050610da26000830184610bd4565b92915050565b6000604082019050610dbd6000830185610bd4565b610dca6020830184610bd4565b9392505050565b600081519050919050565b600081519050919050565b600081905092915050565b600082825260208201905092915050565b6000610e0e82610f03565b9150610e1983610f03565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff03821115610e4e57610e4d610f64565b5b828201905092915050565b6000610e6482610f03565b9150610e6f83610f03565b9250817fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0483118215151615610ea857610ea7610f64565b5b828202905092915050565b6000610ebe82610ee3565b9050919050565b6000610ed082610ee3565b9050919050565b60008115159050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b6000610f1882610f1f565b9050919050565b6000610f2a82610ee3565b9050919050565b60005b83811015610f4f578082015181840152602081019050610f34565b83811115610f5e576000848401525b50505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6000601f19601f8301169050919050565b7f416464726573733a20696e73756666696369656e742062616c616e636520666f60008201527f722063616c6c0000000000000000000000000000000000000000000000000000602082015250565b7f43726f776473616c653a2062656e656669636961727920697320746865207a6560008201527f726f206164647265737300000000000000000000000000000000000000000000602082015250565b7f416464726573733a2063616c6c20746f206e6f6e2d636f6e7472616374000000600082015250565b7f5361666545524332303a204552433230206f7065726174696f6e20646964206e60008201527f6f74207375636365656400000000000000000000000000000000000000000000602082015250565b7f5265656e7472616e637947756172643a207265656e7472616e742063616c6c00600082015250565b7f43726f776473616c653a20776569416d6f756e74206973203000000000000000600082015250565b61111581610eb3565b811461112057600080fd5b50565b61112c81610ed7565b811461113757600080fd5b50565b61114381610f03565b811461114e57600080fd5b5056fea264697066735822122056246a8075233f1c9b9dfe0fa67cfa7e214bc4f8bb916f1f5dad7e40b43ecb2164736f6c63430008040033";

export class DonutStoneCrowdsale__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    _rate: BigNumberish,
    _wallet: string,
    _token: string,
    _tokenWallet: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<DonutStoneCrowdsale> {
    return super.deploy(
      _rate,
      _wallet,
      _token,
      _tokenWallet,
      overrides || {}
    ) as Promise<DonutStoneCrowdsale>;
  }
  getDeployTransaction(
    _rate: BigNumberish,
    _wallet: string,
    _token: string,
    _tokenWallet: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      _rate,
      _wallet,
      _token,
      _tokenWallet,
      overrides || {}
    );
  }
  attach(address: string): DonutStoneCrowdsale {
    return super.attach(address) as DonutStoneCrowdsale;
  }
  connect(signer: Signer): DonutStoneCrowdsale__factory {
    return super.connect(signer) as DonutStoneCrowdsale__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): DonutStoneCrowdsaleInterface {
    return new utils.Interface(_abi) as DonutStoneCrowdsaleInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): DonutStoneCrowdsale {
    return new Contract(address, _abi, signerOrProvider) as DonutStoneCrowdsale;
  }
}
