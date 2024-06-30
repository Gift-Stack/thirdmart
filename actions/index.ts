import { User } from "@/store";

export const connectUser = async (walletAddress: string) => {
  const request = await fetch("/api/auth/connect-user", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ walletAddress }),
  });

  const data: User = await request.json();
  return data;
};

export const createProject = async (data: {
  chainId: number;
  userId: string;
  name: string;
}) => {
  const request = await fetch("/api/projects/create", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      chainId: data.chainId,
      userId: data.userId,
      name: data.name,
    }),
  });

  const project = await request.json();
  return project;
};
