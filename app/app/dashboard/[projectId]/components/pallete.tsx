import React from "react";
import PreviewWrapper, { Info } from "./preview-wrapper";
import { Project } from "@/store";
import { getProject } from "@/actions/project";
import { cn } from "@/lib/utils";
import SwapComp from "./swap";

type PalletProps = {
  projectId: string;
  preview?: boolean;
};

const Pallete = async ({ projectId, preview = false }: PalletProps) => {
  const project: Project = await getProject(projectId);

  return (
    <PreviewWrapper fullScreen={preview}>
      <div
        className={cn(
          "w-[350px] max-h-[700px] flex flex-col justify-center rounded-xl gap-3",
          {
            "h-[80%]": !preview,
            "h-full": preview,
          }
        )}
      >
        <Info project={project} preview={preview} />

        <SwapComp preview={preview} />
      </div>
    </PreviewWrapper>
  );
};

export default Pallete;
