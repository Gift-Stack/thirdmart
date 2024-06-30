import { User } from "@/store";

export const connectUser = async (walletAddress: string) => {
  const request = await fetch("/api/auth/connect-user", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ walletAddress }),
  });

  const user: User = await request.json();
  return user;
};
