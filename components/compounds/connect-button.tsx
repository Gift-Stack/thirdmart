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
import { baseSepolia } from "viem/chains";
import { coinbaseWallet } from "wagmi/connectors";
import { shortenAddress } from "@/web3/utils";

function ConnectWalletButton() {
  const account = useAccount();
  const { status, connect } = useConnect();
  const { disconnect } = useDisconnect();
  const chainId = useChainId();
  const { data: balance } = useBalance();

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
        if (account.status === "disconnected") {
          return (
            <Button
              onClick={() =>
                connect({
                  connector: coinbaseWallet(),
                })
              }
            >
              Create account
            </Button>
          );
        }

        return (
          <div style={{ display: "flex", gap: 12 }}>
            <Button>
              {shortenAddress(account.addresses?.[0] ?? "")}
              {balance?.value ? ` (${balance.value})` : ""}
            </Button>
          </div>
        );
      })()}
    </div>
  );
}

export default ConnectWalletButton;
