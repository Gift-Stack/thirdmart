import React from "react";
import TokenList from "@/components/modals/token-list";
import { Button } from "@/components/ui/button";
import { TransparentInput } from "@/components/ui/input";
import PreviewWrapper, { Info } from "./preview-wrapper";
import { Project } from "@/store";
import { getProject } from "@/actions/project";
import { cn } from "@/lib/utils";
import SwitchIcon from "@/icons/switch";

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
        <Info project={project} />
        <div className="bg-white h-full flex flex-col justify-between items-center rounded-xl py-3 px-3">
          <div className="flex items-center">
            <TransparentInput className="flex-1" />
            <TokenList direction="from" />
          </div>

          <div className="left-0 right-0 flex items-center justify-center">
            <button
              type="button"
              className="hover:shadow-sm transition-border z-10 group bg-background p-2 border border-accent transition-all rounded-full cursor-pointer"
            >
              <div className="transition-transform rotate-0 group-hover:rotate-180">
                <SwitchIcon className="w-4 h-4 lg:w-3 lg:h-3 text-blue" />
              </div>
            </button>
          </div>

          <div className="flex items-center">
            <TransparentInput className="flex-1" />
            <TokenList direction="to" />
          </div>

          <Button className="w-full mt-5">Swap</Button>
        </div>
      </div>
    </PreviewWrapper>
  );
};

export default Pallete;
