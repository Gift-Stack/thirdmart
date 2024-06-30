"use client";
import React from "react";
import ConnectWalletButton from "@/components/compounds/connect-button";
import { Button } from "@/components/ui/button";
import { shortenAddress } from "@/web3/utils";
import { Link as LinkIcon } from "lucide-react";
import { useAccount } from "wagmi";
import { useRouter } from "next/navigation";
import useSignIn from "@/hooks/useSignin";

const SignIn = () => {
  const { address, status } = useAccount();
  const { push } = useRouter();
  const { loading, signIn } = useSignIn();

  const signin = async () => {
    await signIn(address!);
    push("/app/dashboard");
  };

  if (status === "connected") {
    return (
      <div className="flex flex-col items-center justify-center min-h-[90vh] px-4">
        <p>You are connected as {shortenAddress(address)}</p>
        <p>Proceed to the dashboard to see your projects.</p>

        <Button className="mt-4" onClick={signin} disabled={loading}>
          <LinkIcon height={15} width={15} />
          <span className="ml-1.5">
            {loading ? "Loading dashboard..." : "Go to dashboard"}
          </span>
        </Button>
      </div>
    );
  }
  return (
    <div className="flex flex-col justify-center max-w-[500px] w-full mx-auto min-h-[70vh] px-4">
      <p className="text-2xl font-medium">Create an account</p>
      <p className="mb-4">Sign in to start a new project.</p>
      <ConnectWalletButton />
    </div>
  );
};

export default SignIn;
