import * as React from "react";
import { cn } from "@/lib/utils";
const Input = React.forwardRef<HTMLInputElement, React.ComponentProps<"input">>(({ className, type, ...props }, ref) => (
  <input type={type} className={cn("flex h-11 w-full rounded-sm border border-border bg-elevated px-3 text-sm", className)} ref={ref} {...props} />
));
Input.displayName = "Input";
export { Input };
