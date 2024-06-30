"use client";

import { Card, CardContent } from "@/components/ui/card";
import { useProjectStore } from "@/store";
import React from "react";

const PreviewWrapper = ({ children }: { children: React.ReactNode }) => {
  const store = useProjectStore();

  if (!store) {
    return <div>Loading...</div>;
  }

  const { windowColor } = store;
  return (
    <Card
      className={"w-full max-w-[800px] h-[500px] overflow-hidden"}
      style={{ background: windowColor }}
    >
      <CardContent className="flex flex-col items-center justify-center h-full">
        {children}
      </CardContent>
    </Card>
  );
};

export default PreviewWrapper;

export const Info = () => {
  const store = useProjectStore();

  if (!store) {
    return <div>Loading...</div>;
  }

  const { title, description, modifyInfo } = store;

  return (
    <div className="opacity-100">
      <div className="relative rounded-xl border border-accent shadow-sm bg-white dark:bg-background bg-gradient-to-r from-[#3b82f6]/20 to-[#ec4899]/20">
        <div className="flex flex-col space-y-1.5 p-6 whitespace-pre-wrap">
          <h3 className="text-lg font-semibold leading-none tracking-tight">
            <div className="opacity-100">
              <span className="text-base tracking-tighter saturate-200 flex items-center gap-2 bg-gradient-to-r from-[#3b82f6] to-[#ec4899] bg-clip-text text-transparent">
                <svg
                  width="20"
                  height="20"
                  className="text-[#3b82f6]"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 256 256"
                >
                  <rect width="256" height="256" fill="none"></rect>
                  <path
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="24"
                    d="M32,72H55.06445a64,64,0,0,1,52.079,26.80076l41.7132,58.39848A64,64,0,0,0,200.93555,184H232"
                  ></path>
                  <polyline
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="24"
                    points="208 48 232 72 208 96"
                  ></polyline>
                  <polyline
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="24"
                    points="208 160 232 184 208 208"
                  ></polyline>
                  <path
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="24"
                    d="M152.76794 93.858A64.00219 64.00219 0 0 1 200.93555 72H232M32 184H55.06445a64.00212 64.00212 0 0 0 48.16769-21.85814"
                  ></path>
                </svg>
                <span
                  contentEditable // TODO: uncomment when we have a way to edit the title
                  onBlur={(e) => modifyInfo("title", e.target.innerText)}
                >
                  {title}
                </span>
              </span>
            </div>
          </h3>
          <div
            contentEditable
            onBlur={(e) => modifyInfo("description", e.target.innerText)}
            className="text-sm text-muted-foreground"
            dangerouslySetInnerHTML={{ __html: description }}
          />
        </div>
      </div>
    </div>
  );
};
