/* Autogenerated file. Do not edit manually. */

/* tslint:disable */

/* eslint-disable */
import { TypedEventFilter, TypedEvent, TypedListener } from "./commons";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
  BaseContract,
  ContractTransaction,
  PayableOverrides,
  CallOverrides,
} from "ethers";

interface AllowanceCrowdsaleInterface extends ethers.utils.Interface {
  functions: {
    "buyTokens(address)": FunctionFragment;
    "rate()": FunctionFragment;
    "remainingTokens()": FunctionFragment;
    "token()": FunctionFragment;
    "tokenWallet()": FunctionFragment;
    "wallet()": FunctionFragment;
    "weiRaised()": FunctionFragment;
  };

  encodeFunctionData(functionFragment: "buyTokens", values: [string]): string;
  encodeFunctionData(functionFragment: "rate", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "remainingTokens",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "token", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "tokenWallet",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "wallet", values?: undefined): string;
  encodeFunctionData(functionFragment: "weiRaised", values?: undefined): string;

  decodeFunctionResult(functionFragment: "buyTokens", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "rate", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "remainingTokens",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "token", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "tokenWallet",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "wallet", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "weiRaised", data: BytesLike): Result;

  events: {
    "TokensPurchased(address,address,uint256,uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "TokensPurchased"): EventFragment;
}

export type TokensPurchasedEvent = TypedEvent<
  [string, string, BigNumber, BigNumber] & {
    purchaser: string;
    beneficiary: string;
    value: BigNumber;
    amount: BigNumber;
  }
>;

export class AllowanceCrowdsale extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  listeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter?: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): Array<TypedListener<EventArgsArray, EventArgsObject>>;
  off<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  on<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  once<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeListener<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeAllListeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): this;

  listeners(eventName?: string): Array<Listener>;
  off(eventName: string, listener: Listener): this;
  on(eventName: string, listener: Listener): this;
  once(eventName: string, listener: Listener): this;
  removeListener(eventName: string, listener: Listener): this;
  removeAllListeners(eventName?: string): this;

  queryFilter<EventArgsArray extends Array<any>, EventArgsObject>(
    event: TypedEventFilter<EventArgsArray, EventArgsObject>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEvent<EventArgsArray & EventArgsObject>>>;

  interface: AllowanceCrowdsaleInterface;

  functions: {
    buyTokens(
      beneficiary: string,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    rate(overrides?: CallOverrides): Promise<[BigNumber]>;

    remainingTokens(overrides?: CallOverrides): Promise<[BigNumber]>;

    token(overrides?: CallOverrides): Promise<[string]>;

    tokenWallet(overrides?: CallOverrides): Promise<[string]>;

    wallet(overrides?: CallOverrides): Promise<[string]>;

    weiRaised(overrides?: CallOverrides): Promise<[BigNumber]>;
  };

  buyTokens(
    beneficiary: string,
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  rate(overrides?: CallOverrides): Promise<BigNumber>;

  remainingTokens(overrides?: CallOverrides): Promise<BigNumber>;

  token(overrides?: CallOverrides): Promise<string>;

  tokenWallet(overrides?: CallOverrides): Promise<string>;

  wallet(overrides?: CallOverrides): Promise<string>;

  weiRaised(overrides?: CallOverrides): Promise<BigNumber>;

  callStatic: {
    buyTokens(beneficiary: string, overrides?: CallOverrides): Promise<void>;

    rate(overrides?: CallOverrides): Promise<BigNumber>;

    remainingTokens(overrides?: CallOverrides): Promise<BigNumber>;

    token(overrides?: CallOverrides): Promise<string>;

    tokenWallet(overrides?: CallOverrides): Promise<string>;

    wallet(overrides?: CallOverrides): Promise<string>;

    weiRaised(overrides?: CallOverrides): Promise<BigNumber>;
  };

  filters: {
    "TokensPurchased(address,address,uint256,uint256)"(
      purchaser?: string | null,
      beneficiary?: string | null,
      value?: null,
      amount?: null
    ): TypedEventFilter<
      [string, string, BigNumber, BigNumber],
      {
        purchaser: string;
        beneficiary: string;
        value: BigNumber;
        amount: BigNumber;
      }
    >;

    TokensPurchased(
      purchaser?: string | null,
      beneficiary?: string | null,
      value?: null,
      amount?: null
    ): TypedEventFilter<
      [string, string, BigNumber, BigNumber],
      {
        purchaser: string;
        beneficiary: string;
        value: BigNumber;
        amount: BigNumber;
      }
    >;
  };

  estimateGas: {
    buyTokens(
      beneficiary: string,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    rate(overrides?: CallOverrides): Promise<BigNumber>;

    remainingTokens(overrides?: CallOverrides): Promise<BigNumber>;

    token(overrides?: CallOverrides): Promise<BigNumber>;

    tokenWallet(overrides?: CallOverrides): Promise<BigNumber>;

    wallet(overrides?: CallOverrides): Promise<BigNumber>;

    weiRaised(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    buyTokens(
      beneficiary: string,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    rate(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    remainingTokens(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    token(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    tokenWallet(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    wallet(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    weiRaised(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}