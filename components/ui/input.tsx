import * as React from "react";

import { cn } from "@/lib/utils";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "flex h-9 w-full rounded-md border border-neutral-200 bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-neutral-500 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-neutral-950 disabled:cursor-not-allowed disabled:opacity-50 dark:border-neutral-800 dark:placeholder:text-neutral-400 dark:focus-visible:ring-neutral-300",
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Input.displayName = "Input";

const TransparentInput = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <Input
        type={type}
        className="truncate appearance-none dark:text-slate-50 text-gray-900 w-full !ring-0 !outline-none min-h-[40px] h-[40px] py-2 border-0 bg-transparent p-0 !text-3xl font-medium flex-grow flex-1 shadow-none"
        autoCorrect="off"
        autoCapitalize="none"
        spellCheck="false"
        autoComplete="off"
        placeholder="0.0"
        testdata-id="swap-from-input"
        data-state="active"
        ref={ref}
        {...props}
      />
    );
  }
);
TransparentInput.displayName = "TransparentInput";

export { Input, TransparentInput };
