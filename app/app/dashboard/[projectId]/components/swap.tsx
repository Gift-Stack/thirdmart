"use client";
import React, { useState } from "react";
import { useCallback } from "react";
import { ConnectAccount } from "@coinbase/onchainkit/wallet";
import {
  Swap,
  SwapAmountInput,
  SwapToggleButton,
  SwapButton,
} from "@coinbase/onchainkit/swap";
import { useAccount, useSendTransaction } from "wagmi";
import {
  type BuildSwapTransaction,
  type SwapError,
  SwapMessage,
} from "@coinbase/onchainkit/swap";
import type { Token } from "@coinbase/onchainkit/token";
import { base } from "viem/chains";
import { OnchainKitConfig } from "@coinbase/onchainkit";
import { Address } from "viem";

import TokenList from "@/components/modals/token-list";
import { Button } from "@/components/ui/button";
import { TransparentInput } from "@/components/ui/input";
import SwitchIcon from "@/icons/switch";
import { debounce } from "@/lib/utils";

// export type GetQuoteAPIParams = {
//   from: AddressOrETH | ""; // The source address or 'ETH' for Ethereum
//   to: AddressOrETH | ""; // The destination address or 'ETH' for Ethereum
//   amount: string; // The amount to be swapped
//   amountReference?: string; // The reference amount for the swap
// };

// export type GetSwapAPIParams = GetQuoteAPIParams & {
//   fromAddress: Address; // The address of the user
// };

export function isSwapError(response: unknown): response is SwapError {
  return (
    response !== null && typeof response === "object" && "error" in response
  );
}

export type SwapAPIParams = GetQuoteAPIParams | GetSwapAPIParams;

export type QuoteWarning = {
  description?: string; // The description of the warning
  message?: string; // The message of the warning
  type?: string; // The type of the warning
};

/**
 * Note: exported as public Type
 */
export type SwapQuote = {
  amountReference: string; // The reference amount for the quote
  from: Token; // The source token for the swap
  fromAmount: string; // The amount of the source token
  hasHighPriceImpact: boolean; // Whether the price impact is high
  priceImpact: string; // The price impact of the swap
  slippage: string; // The slippage of the swap
  to: Token; // The destination token for the swap
  toAmount: string; // The amount of the destination token
  warning?: QuoteWarning; // The warning associated with the quote
};

export type AddressOrETH = Address | "ETH";

export type GetAPIParamsForToken =
  | GetSwapQuoteParams
  | BuildSwapTransactionParams;

export type GetQuoteAPIParams = {
  from: AddressOrETH | ""; // The source address or 'ETH' for Ethereum
  to: AddressOrETH | ""; // The destination address or 'ETH' for Ethereum
  amount: string; // The amount to be swapped
  amountReference?: string; // The reference amount for the swap
};

export type GetSwapAPIParams = GetQuoteAPIParams & {
  fromAddress: Address; // The address of the user
};

/**
 * Note: exported as public Type
 */
export type BuildSwapTransactionParams = GetSwapQuoteParams & {
  fromAddress: Address; // The address of the user
};

/**
 * Note: exported as public Type
 */
export type GetSwapQuoteParams = {
  from: Token; // The source token for the swap
  to: Token; // The destination token for the swap
  amount: string; // The amount to be swapped
  amountReference?: string; // The reference amount for the swap
  isAmountInDecimals?: boolean; // Whether the amount is in decimals
};

/**
 * Note: exported as public Type
 */
export type GetSwapQuoteResponse = SwapQuote | SwapError;

export const ONCHAIN_KIT_CONFIG: OnchainKitConfig = {
  address: null,
  apiKey: process.env.NEXT_PUBLIC_COINBASE_API_KEY!,
  chain: base,
  rpcUrl: null,
  schemaId: null,
};

export type JSONRPCError = {
  code: number;
  message: string;
};

export type JSONRPCRequest<T> = {
  id: number;
  jsonrpc: string;
  method: string;
  params: T[];
};

export type JSONRPCResult<T> = {
  error?: JSONRPCError;
  id: number;
  jsonrpc: string;
  result: T;
};

const POST_METHOD = "POST";
const JSON_HEADERS = {
  "Content-Type": "application/json",
};
const JSON_RPC_VERSION = "2.0";

/**
 * Builds a JSON-RPC request body.
 *
 * @param method - The method name.
 * @param params - The parameters for the method.
 * @returns The JSON-RPC request body.
 * @template T - The type of the parameters.
 */
export function buildRequestBody<T>(
  method: string,
  params: T[]
): JSONRPCRequest<T> {
  return {
    id: 1,
    jsonrpc: JSON_RPC_VERSION,
    method: method,
    params: params,
  };
}

export const LOW_LIQUIDITY_ERROR_CODE = "SWAP_QUOTE_LOW_LIQUIDITY_ERROR";
export const GENERAL_SWAP_ERROR_CODE = "SWAP_ERROR";
export const GENERAL_SWAP_QUOTE_ERROR_CODE = "SWAP_QUOTE_ERROR";
export const GENERAL_SWAP_BALANCE_ERROR_CODE = "SWAP_BALANCE_ERROR";
export const UNCAUGHT_SWAP_QUOTE_ERROR_CODE = "UNCAUGHT_SWAP_QUOTE_ERROR";
export const UNCAUGHT_SWAP_ERROR_CODE = "UNCAUGHT_SWAP_ERROR";

export const CDP_LIST_SWAP_ASSETS = "cdp_listSwapAssets";
export const CDP_GET_SWAP_QUOTE = "cdp_getSwapQuote";
export const CDP_GET_SWAP_TRADE = "cdp_getSwapTrade";

export function formatTokenAmount(amount: string, decimals: number) {
  // Convert the string amount to a number using decimals value
  const numberAmount = Number(amount) / 10 ** decimals;
  return numberAmount.toString();
}

/**
 * Formats an amount according to the decimals. Defaults to 18 decimals for ERC-20s.
 */
export function formatDecimals(
  amount: string,
  inputInDecimals = true,
  decimals = 18
): string {
  if (inputInDecimals) {
    return (Number(amount) / 10 ** decimals).toString();
  }
  return (Number(amount) * 10 ** decimals).toString();
}

/**
 * Access the RPC URL for OnchainKit.
 * Defaults to using Coinbase Developer Platform if a RPC URL is not provided.
 */
export const getRPCUrl = () => {
  if (!ONCHAIN_KIT_CONFIG.rpcUrl && !ONCHAIN_KIT_CONFIG.apiKey) {
    throw new Error(
      "API Key Unset: You can use the Coinbase Developer Platform RPC by providing an API key in `OnchainKitProvider` or by manually calling `setOnchainKitConfig`: https://portal.cdp.coinbase.com/products/onchainkit"
    );
  }
  return (
    ONCHAIN_KIT_CONFIG.rpcUrl ||
    `https://api.developer.coinbase.com/rpc/v1/${ONCHAIN_KIT_CONFIG.chain.name
      .replace(" ", "-")
      .toLowerCase()}/${ONCHAIN_KIT_CONFIG.apiKey}`
  );
};

export function getSwapErrorCode(
  context: "swap" | "quote" | "balance" | "uncaught-swap" | "uncaught-quote",
  errorCode?: number
) {
  // TODO: handle additional error codes

  if (errorCode === -32602) {
    return LOW_LIQUIDITY_ERROR_CODE;
  }

  if (context === "uncaught-swap") {
    return UNCAUGHT_SWAP_ERROR_CODE;
  }

  if (context === "uncaught-quote") {
    return UNCAUGHT_SWAP_QUOTE_ERROR_CODE;
  }

  if (context === "quote") {
    return GENERAL_SWAP_QUOTE_ERROR_CODE;
  }

  if (context === "balance") {
    return GENERAL_SWAP_BALANCE_ERROR_CODE;
  }

  return GENERAL_SWAP_ERROR_CODE;
}

/**
 * Sends a JSON-RPC request to configured RPC URL.
 * Defaults to using the Coinbase Developer Platform Node.
 *
 * @param body - The JSON-RPC request body.
 * @returns A promise that resolves to the JSON-RPC response.
 * @throws If an error occurs while sending the request.
 */
export async function sendRequest<T, V>(
  method: string,
  params: T[]
): Promise<JSONRPCResult<V>> {
  try {
    const body = buildRequestBody<T>(method, params);
    const url = getRPCUrl();
    const response = await fetch(url, {
      body: JSON.stringify(body),
      headers: JSON_HEADERS,
      method: POST_METHOD,
    });
    const data: JSONRPCResult<V> = await response.json();
    return data;
  } catch (error) {
    console.log(
      `sendRequest: error sending request: ${(error as Error).message}`
    );
    throw error;
  }
}

export function getAPIParamsForToken(
  params: GetAPIParamsForToken
): SwapAPIParams {
  const { from, to, amount, amountReference, isAmountInDecimals } = params;
  const { fromAddress } = params as BuildSwapTransactionParams;
  const decimals = amountReference === "from" ? from.decimals : to.decimals;
  return {
    fromAddress: fromAddress,
    from: from.address || "ETH",
    to: to.address || "ETH",
    amount: isAmountInDecimals
      ? amount
      : formatDecimals(amount, false, decimals),
    amountReference: amountReference || "from",
  };
}

/**
 * Retrieves a quote for a swap from Token A to Token B.
 */
async function getSwapQuote(
  params: GetSwapQuoteParams
): Promise<GetSwapQuoteResponse> {
  // Default parameters
  const defaultParams = {
    amountReference: "from",
    isAmountInDecimals: false,
  };
  const apiParams = getAPIParamsForToken({ ...defaultParams, ...params });

  try {
    const res = await sendRequest<SwapAPIParams, SwapQuote>(
      CDP_GET_SWAP_QUOTE,
      [apiParams]
    );
    if (res.error) {
      return {
        // code: getSwapErrorCode("quote", res.error?.code),
        code: "404",
        error: res.error.message,
      } as SwapError;
    }
    return res.result;
  } catch (error) {
    return {
      code: getSwapErrorCode("uncaught-quote"),
      error: "Something went wrong",
    };
  }
}

export type RawTransactionData = {
  data: string; // The transaction data
  from: string; // The sender address
  gas: string; // The gas limit
  gasPrice: string; // The gas price
  to: string; // The recipient address
  value: string; // The value of the transaction
};

export type Transaction = {
  chainId: number; // The chain ID
  data: Address; // The data for the transaction
  gas: bigint; // The gas limit
  maxFeePerGas?: bigint | undefined; // The maximum fee per gas
  maxPriorityFeePerGas?: bigint | undefined; // The maximum priority fee per gas
  nonce?: number; // The nonce for the transaction
  to: Address; // The recipient address
  value: bigint; // The value of the transaction
};

/**
 * Constructs an unsigned transaction.
 *
 * A transaction is a message sent by an Account requesting
 * to perform an action on the Ethereum blockchain.
 *
 * Transactions can be used to transfer Ether between accounts,
 * execute smart contract code, deploy smart contracts, etc.
 */
export function getSwapTransaction(
  rawTx: RawTransactionData,
  chainId: string
): Transaction {
  const { data, gas, to, value } = rawTx;
  return {
    chainId: Number(chainId),
    data: data as Address,
    gas: BigInt(gas),
    to: to as Address,
    value: BigInt(value),
  };
}

/**
 * Retrieves an unsigned transaction for a swap from Token A to Token B.
 */
export async function buildSwapTransaction(
  params: BuildSwapTransactionParams
): Promise<BuildSwapTransactionResponse> {
  // Default parameters
  const defaultParams = {
    amountReference: "from",
    isAmountInDecimals: false,
  };

  const apiParams = getAPIParamsForToken({ ...defaultParams, ...params });

  try {
    const res = await sendRequest<SwapAPIParams, SwapAPIResponse>(
      CDP_GET_SWAP_TRADE,
      [apiParams]
    );
    if (res.error) {
      return {
        code: getSwapErrorCode("swap", res.error?.code),
        error: res.error.message,
      } as SwapError;
    }

    const trade = res.result;
    return {
      approveTransaction: trade.approveTx
        ? getSwapTransaction(trade.approveTx, trade.chainId)
        : undefined,
      fee: trade.fee,
      quote: trade.quote,
      transaction: getSwapTransaction(trade.tx, trade.chainId),
      warning: trade.quote.warning,
    };
  } catch (error) {
    return {
      code: getSwapErrorCode("uncaught-swap"),
      error: "Something went wrong",
    };
  }
}

/**
 * Note: exported as public Type
 */
export type Fee = {
  amount: string; // The amount of the fee
  baseAsset: Token; // The base asset for the fee
  percentage: string; // The percentage of the fee
};

export type SwapAPIResponse = {
  approveTx?: RawTransactionData; // The approval transaction
  chainId: string; // The chain ID
  fee: Fee; // The fee for the trade
  quote: SwapQuote; // The quote for the trade
  tx: RawTransactionData; // The trade transaction
};

/**
 * Note: exported as public Type
 */
export type BuildSwapTransactionResponse = BuildSwapTransaction | SwapError;

export type SwapErrorState = {
  fromTokenBalanceError?: SwapError;
  quoteError?: SwapError;
  swapError?: SwapError;
  toTokenBalanceError?: SwapError;
};

export type SwapLoadingState = {
  isFromQuoteLoading: boolean;
  isToQuoteLoading: boolean;
  isSwapLoading: boolean;
};

const ETHToken: Token = {
  address: "",
  chainId: base.id,
  decimals: 18,
  name: "Ethereum",
  symbol: "ETH",
  image: "",
};

const USDCToken: Token = {
  address: "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
  chainId: base.id,
  decimals: 6,
  name: "USDC",
  symbol: "USDC",
  image: "",
};

const SwapComp = ({ preview = false }: { preview?: boolean }) => {
  const { address } = useAccount();
  const [swapErrorState, setSwapErrorState] = useState<SwapErrorState>();
  const [swapLoadingState, setSwapLoadingState] = useState<SwapLoadingState>({
    isFromQuoteLoading: false,
    isSwapLoading: false,
    isToQuoteLoading: false,
  });

  const [fromAmount, setFromAmount] = useState("");
  const [fromToken, setFromToken] = useState<Token>(ETHToken);
  const [toAmount, setToAmount] = useState("");
  const [toToken, setToToken] = useState<Token>(USDCToken);

  const isDisabled =
    !fromAmount ||
    !fromToken ||
    !toAmount ||
    !toToken ||
    swapLoadingState?.isSwapLoading;

  const { sendTransaction } = useSendTransaction();

  const swappableTokens: Token[] = [];

  const sendSwapTransaction = useCallback(
    async (swapTransaction: BuildSwapTransaction) => {
      const { transaction } = swapTransaction;
      console.log("Prepared swapTransaction:", transaction);
      // Transaction submission sample code
      const result = await sendTransaction({
        to: transaction.to,
        value: transaction.value,
        data: transaction.data,
      });
    },
    [sendTransaction]
  );

  const swapTransaction = useCallback(async () => {
    if (address && fromToken && toToken && fromAmount) {
      try {
        setSwapLoadingState({ ...swapLoadingState, isSwapLoading: true });
        setSwapErrorState({ ...swapErrorState, swapError: undefined });
        const response = await buildSwapTransaction({
          amount: fromAmount,
          fromAddress: address,
          from: fromToken,
          to: toToken,
        });
        if (isSwapError(response)) {
          setSwapErrorState({ ...swapErrorState, swapError: response });
        } else {
          sendSwapTransaction(response);
        }
      } catch (error) {
        setSwapErrorState({
          ...swapErrorState,
          swapError: error as SwapError,
        });
      } finally {
        setSwapLoadingState({ ...swapLoadingState, isSwapLoading: false });
      }
    }
  }, [
    address,
    fromAmount,
    fromToken,
    sendSwapTransaction,
    setSwapErrorState,
    swapErrorState,
    swapLoadingState,
    setSwapLoadingState,
    toToken,
  ]);

  /**
   * Converts parameters with `Token` to ones with address.
   *
   * Additionally adds default values for optional request fields.
   */

  function isValidAmount(value: string) {
    if (value === "") {
      return true;
    }
    const regex = /^[0-9]*\.?[0-9]*$/;
    return regex.test(value);
  }

  const handleFromAmountChange = useCallback(
    async (amount: string) => {
      const hasRequiredFields = fromToken && toToken && amount;
      if (!hasRequiredFields) {
        return;
      }
      try {
        /* when fromAmount changes we fetch quote for toAmount
        so set isToQuoteLoading to true */
        setSwapLoadingState({
          ...swapLoadingState,
          isToQuoteLoading: true,
        });
        setSwapErrorState({
          ...swapErrorState,
          quoteError: undefined,
        });
        const response = await getSwapQuote({
          from: fromToken,
          to: toToken,
          amount,
          amountReference: "from",
        });
        /* if request resolves to error response set the quoteError
        property of error state to the SwapError response */
        if (isSwapError(response)) {
          setSwapErrorState({ ...swapErrorState, quoteError: response });
          return;
        }
        const formattedAmount = formatTokenAmount(
          response?.toAmount,
          response?.to?.decimals
        );
        setToAmount(formattedAmount);
      } catch (err) {
        setSwapErrorState({
          ...swapErrorState,
          quoteError: err as SwapError,
        });
      } finally {
        /* reset loading state when quote request resolves */
        setSwapLoadingState({
          ...swapLoadingState,
          isToQuoteLoading: false,
        });
      }
    },
    [fromToken, swapErrorState, swapLoadingState, toToken]
  );

  const handleToAmountChange = useCallback(
    async (amount: string) => {
      const hasRequiredFields = fromToken && toToken && amount;
      if (!hasRequiredFields) {
        return;
      }
      try {
        /* when toAmount changes we fetch quote for fromAmount
        so set isFromQuoteLoading to true */
        setSwapLoadingState({
          ...swapLoadingState,
          isFromQuoteLoading: true,
        });
        setSwapErrorState({
          ...swapErrorState,
          quoteError: undefined,
        });
        const response = await getSwapQuote({
          from: fromToken,
          to: toToken,
          amount,
          amountReference: "to",
        });
        /* if request resolves to error response set the quoteError
        property of error state to the SwapError response */
        if (isSwapError(response)) {
          setSwapErrorState({ ...swapErrorState, quoteError: response });
          return;
        }
        const formattedAmount = formatTokenAmount(
          response.fromAmount,
          response?.from?.decimals
        );
        setFromAmount(formattedAmount);
      } catch (err) {
        setSwapErrorState({ ...swapErrorState, quoteError: err as SwapError });
      } finally {
        /* reset loading state when quote request resolves */
        setSwapLoadingState({
          ...swapLoadingState,
          isFromQuoteLoading: false,
        });
      }
    },
    [fromToken, swapErrorState, swapLoadingState, toToken]
  );

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    if (!isValidAmount(value)) return;

    if (name === "fromAmount") {
      setFromAmount(value);
      debounce(handleFromAmountChange, 500)(value);
    } else if (name === "toAmount") {
      setToAmount(value);
      debounce(handleToAmountChange, 500)(value);
    }
  };

  const handleToggle = useCallback(() => {
    setFromAmount(toAmount);
    setToAmount(fromAmount);
    setToToken(fromToken);
    setFromToken(toToken);
  }, [fromAmount, fromToken, toAmount, toToken]);

  return (
    <div className="bg-white h-full flex flex-col justify-between items-center rounded-xl py-3 px-3">
      <div className="flex items-center">
        <TransparentInput
          name="fromAmount"
          value={fromAmount}
          onChange={handleInputChange}
          className="flex-1"
        />
        <TokenList direction="from" token={fromToken} />
      </div>

      <div className="left-0 right-0 flex items-center justify-center">
        <Button
          type="button"
          variant="outline"
          className="hover:shadow-sm transition-border z-10 group bg-background p-2 border border-accent transition-all rounded-full cursor-pointer"
          onClick={handleToggle}
        >
          <div className="transition-transform rotate-0 group-hover:rotate-180">
            <SwitchIcon className="w-4 h-4 lg:w-3 lg:h-3 text-blue" />
          </div>
        </Button>
      </div>

      <div className="flex items-center mt-3">
        <TransparentInput
          disabled
          name="toAmount"
          value={toAmount}
          onChange={handleInputChange}
          className="flex-1"
        />
        <TokenList direction="to" token={toToken} />
      </div>

      <Button
        className="w-full mt-5"
        disabled={isDisabled}
        onClick={preview ? swapTransaction : undefined}
      >
        Swap
      </Button>
    </div>
  );

  //   return (
  //     <Swap address={address!} title="">
  //       <SwapAmountInput
  //         label="Sell"
  //         swappableTokens={swappableTokens}
  //         token={ETHToken}
  //         type="from"
  //       />
  //       <SwapToggleButton />
  //       <SwapAmountInput
  //         label="Buy"
  //         swappableTokens={swappableTokens}
  //         token={USDCToken}
  //         type="to"
  //       />
  //       <SwapButton onSubmit={onSubmit} />
  //     </Swap>
  //   );
};

export default SwapComp;
