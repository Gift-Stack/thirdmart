import { Project, User } from "@/store";

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

export const createProject = async (data: {
  chainId: string;
  userId: string;
  name: string;
  title: string;
}) => {
  const request = await fetch("/api/projects/create", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  const project: Project = await request.json();
  return project;
};
