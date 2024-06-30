import ConnectWalletButton from "@/components/compounds/connect-button";
import { SmallLogo } from "@/components/logo";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";
import Projects from "./projects";

const Dashboard = () => {
  return (
    <div>
      <div className="border-b mb-8 sm:mb-10">
        <div className="bg-white flex items-center justify-between px-3 py-3 max-w-7xl mx-auto">
          <SmallLogo />
          <ConnectWalletButton />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <p className="text-3xl font-semibold">Projects</p>
        <div className="flex justify-between items-center mb-20">
          <p className="opacity-70">
            Manage all your Projects and create new ones
          </p>
          <Link href="/app/getting-started">
            <Button>Create Project</Button>
          </Link>
        </div>

        <Projects />
      </div>
    </div>
  );
};

export default Dashboard;
