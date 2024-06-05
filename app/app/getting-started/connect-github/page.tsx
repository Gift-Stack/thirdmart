"use client";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import toast, { Toaster } from "react-hot-toast";
import Loading from "@/components/compounds/loading";

export default function ConnectGithub({
  searchParams,
}: {
  searchParams: Record<string, string | undefined>;
}) {
  const { push } = useRouter();
  const { error, error_description, code } = searchParams;

  // Getting `windows` from browser -- So had to use function to avoid getting error for using `window`
  const constructGithubUrl = () => {
    return `https://github.com/login/oauth/authorize?client_id=${
      process.env.NEXT_PUBLIC_GITHUB_CLIENT_ID
    }&redirect_uri=${window.location.href.split("?")[0]}`;
  };

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    if (error && error_description) {
      toast.error(error_description, {
        id: "github-connect-error",
      });
    } else if (code) {
      toast.success("Successfully connected to GitHub", {
        id: "github-connect-success",
      });
      const timer = setTimeout(() => {
        const url = `/app/getting-started/select-network?github_code=${code}&initiation_type=web2_migration`;

        push(url);
      }, 1000);

      return () => clearTimeout(timer);
    }
  }, [code, error, error_description, push]);

  if (typeof window === "undefined") {
    return <Loading />;
  }

  return (
    <div className="flex flex-col items-center justify-center h-screen px-4 sm:px-6 md:px-8">
      <div className="max-w-md w-full space-y-6">
        <div className="text-center">
          <h1 className="text-3xl font-bold tracking-tight">
            Integrate Your Web Apps with DeFi
          </h1>
          <p className="mt-4 text-gray-500 dark:text-gray-400">
            Connect your GitHub account to seamlessly integrate your existing
            web applications with decentralized finance (DeFi) protocols.
          </p>
        </div>
        <Link href={constructGithubUrl()}>
          <Button className="w-full">
            <GithubIcon className="mr-2 h-5 w-5" />
            Connect GitHub
          </Button>
        </Link>
      </div>

      <Toaster key={error + "" + error_description + "" + code} />
    </div>
  );
}

function GithubIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );
}
