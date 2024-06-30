"use client";

import { Card, CardContent } from "@/components/ui/card";
import CrossCommunicateIcon from "@/icons/cross-communicate";
import { cn } from "@/lib/utils";
import { Project, useProjectStore } from "@/store";
import React from "react";

type PreviewWrapperProps = {
  children: React.ReactNode;
  fullScreen?: boolean;
};

const PreviewWrapper = ({
  children,
  fullScreen = false,
}: PreviewWrapperProps) => {
  const { windowColor } = useProjectStore();

  return (
    <Card
      className={cn("w-full overflow-hidden flex flex-col justify-center", {
        "max-w-[800px] h-[500px]": !fullScreen,
        "rounded-none border-none h-full min-h-screen": fullScreen,
      })}
      style={{ background: windowColor }}
    >
      <CardContent className="flex flex-col items-center justify-center h-full">
        {children}
      </CardContent>
    </Card>
  );
};

export default PreviewWrapper;

export const Info = ({
  project,
  preview,
}: {
  project: Project;
  preview: boolean;
}) => {
  const { title, description, modifyInfo } = useProjectStore();

  return (
    <div className="opacity-100">
      <div className="relative rounded-xl border border-accent shadow-sm bg-white dark:bg-background bg-gradient-to-r from-[#3b82f6]/20 to-[#ec4899]/20">
        <div className="flex flex-col space-y-1.5 p-6 whitespace-pre-wrap">
          <h3 className="text-lg font-semibold leading-none tracking-tight">
            <div className="opacity-100">
              <span className="text-base tracking-tighter saturate-200 flex items-center gap-2 bg-gradient-to-r from-[#3b82f6] to-[#ec4899] bg-clip-text text-transparent">
                <CrossCommunicateIcon className="text-[#3b82f6]" />
                <span
                  contentEditable={!preview} // TODO: uncomment when we have a way to edit the title
                  onBlur={(e) => modifyInfo("title", e.target.innerText)}
                >
                  {project.title}
                </span>
              </span>
            </div>
          </h3>
          <div
            contentEditable={!preview}
            onBlur={(e) => modifyInfo("description", e.target.innerText)}
            className="text-sm text-muted-foreground"
            dangerouslySetInnerHTML={{ __html: description }}
          />
        </div>
      </div>
    </div>
  );
};
