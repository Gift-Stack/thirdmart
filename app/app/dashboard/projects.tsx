"use client";
import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import useProjects from "@/hooks/useProjects";
import { type Project } from "@/store";

const Projects = () => {
  const { projects } = useProjects();

  return (
    <>
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

      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3">
        {projects.map((project, index) => (
          <Link key={index} href={`/app/dashboard/${project.projectId}`}>
            <SingleProject project={project} />
          </Link>
        ))}
      </div>
    </>
  );
};

export default Projects;

const SingleProject = ({ project }: { project: Project }) => {
  return (
    <Card role="button" className="h-full">
      <CardContent className="pt-6">
        <p className="text-xl font-semibold">{project.name ?? "Untitled"}</p>
        <p>{project.title}</p>

        <p className="mt-4 p-1 px-3 text-xs italic inline-block rounded bg-gray-300">
          Swap
        </p>
      </CardContent>
    </Card>
  );
};
