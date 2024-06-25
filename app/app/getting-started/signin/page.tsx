"use client";
import ConnectWalletButton from "@/components/compounds/connect-button";
import { Button } from "@/components/ui/button";
import { shortenAddress } from "@/web3/utils";
import Link from "next/link";
import { Link as LinkIcon } from "lucide-react";
import React from "react";
import { useAccount } from "wagmi";

const SignIn = () => {
  const { address, status } = useAccount();

  if (status === "connected") {
    return (
      <div className="flex flex-col items-center justify-center min-h-[90vh]">
        <p>You are connected as {shortenAddress(address)}</p>
        <p>Proceed to the dashboard to see your projects.</p>
        <Link href="/app/dashboard" className="mt-4">
          <Button>
            <LinkIcon height={15} width={15} />
            <span className="ml-1.5">Go to dashboard</span>
          </Button>
        </Link>
      </div>
    );
  }
  return (
    <div className="flex flex-col justify-center max-w-[500px] w-full mx-auto min-h-[70vh] ">
      <p className="text-2xl font-medium">Create an account</p>
      <p className="mb-4">Sign in to start a new project.</p>
      <ConnectWalletButton />
    </div>
  );
};

export default SignIn;
