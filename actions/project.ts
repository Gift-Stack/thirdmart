import { Project } from "@/store";

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

export const getProjects = async (userId: string) => {
  const request = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/projects?userId=${userId}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }
  );

  const projects: { data: { data: Project[] } } = await request.json();
  return projects.data.data;
};

export const getProject = async (projectId: string) => {
  const request = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/projects/${projectId}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }
  );

  const project: { data: Project } = await request.json();
  return project.data;
};
