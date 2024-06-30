"use client";
import React from "react";
import { Button } from "@/components/ui/button";

import {
  useAccount,
  useBalance,
  useChainId,
  useConnect,
  useDisconnect,
} from "wagmi";
import { coinbaseWallet } from "wagmi/connectors";
import { shortenAddress } from "@/web3/utils";

import {
  Avatar,
  Identity,
  Name,
  Badge,
  Address,
} from "@coinbase/onchainkit/identity";
import useSignIn from "@/hooks/useSignin";

function ConnectWalletButton() {
  const account = useAccount();
  const { status, connectAsync: connect } = useConnect();
  const { disconnect } = useDisconnect();
  const chainId = useChainId();
  const { data: balance } = useBalance();
  const { loading, signIn } = useSignIn();

  const createAccount = async () => {
    const walletData = await connect({
      connector: coinbaseWallet(),
    });

    await signIn(walletData.accounts[0]);
  };

  return (
    <div
      className=""
      {...(status === "pending" && {
        "aria-hidden": true,
        style: {
          opacity: 0,
          pointerEvents: "none",
          userSelect: "none",
        },
      })}
    >
      {(() => {
        if (account.status === "disconnected" || !account.address) {
          return (
            <Button onClick={createAccount}>
              {loading ? "Creating account..." : "Create account"}
            </Button>
          );
        }

        return (
          <div style={{ display: "flex", gap: 12 }}>
            <Identity
              address={account.address}
              schemaId="0xf8b05c79f090979bf4a80270aba232dff11a10d9ca55c4f88de95317970f0de9"
            >
              <Avatar>
                <Badge />
              </Avatar>
              <Name className="text-xs" />
              <Address className="text-xs" />
            </Identity>
          </div>
        );
      })()}
    </div>
  );
}

export default ConnectWalletButton;
