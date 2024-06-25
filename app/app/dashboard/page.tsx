import ConnectWalletButton from "@/components/compounds/connect-button";
import { SmallLogo } from "@/components/logo";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
import React from "react";

const Dashboard = () => {
  const projects: any[] = [];
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

        {!projects.length && (
          <div className="flex flex-col items-center justify-center gap-5">
            <div className="text-center">
              <p className="text-lg font-medium">No Projects yet</p>
              <p className="text-sm opacity-70">
                You haven’t created any projects, new projects will show here
              </p>
            </div>
            <Link href="/app/getting-started">
              <Button>Create Project</Button>
            </Link>
          </div>
        )}

        {projects.map((_, index) => (
          <div key={index} className="grid sm:grid-cols-2 md:grid-cols-3 gap-3">
            <Link href="/app/dashboard/1">
              <Project />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;

const Project = () => {
  return (
    <Card role="button">
      <CardContent className="pt-6">
        <p className="text-xl font-semibold">Thirdmart Cross-chain Swap</p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur,
          ipsam.
        </p>

        <p className="mt-4 p-1 px-3 text-xs italic inline-block rounded bg-gray-300">
          Swap
        </p>
      </CardContent>
    </Card>
  );
};
