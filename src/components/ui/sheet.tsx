import * as React from "react";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { X } from "lucide-react";
import { cn } from "@/lib/utils";

export const Sheet = DialogPrimitive.Root;
export const SheetContent = React.forwardRef<React.ComponentRef<typeof DialogPrimitive.Content>, React.ComponentPropsWithoutRef<typeof DialogPrimitive.Content>>(({ className, children, ...props }, ref) => (
  <DialogPrimitive.Portal>
    <DialogPrimitive.Overlay className="fixed inset-0 z-50 bg-bg/80" />
    <DialogPrimitive.Content ref={ref} className={cn("fixed inset-y-0 left-0 z-50 flex h-full w-72 flex-col border-r border-border bg-surface p-5", className)} {...props}>
      {children}
      <DialogPrimitive.Close className="absolute right-4 top-4 text-muted"><X className="size-4" /></DialogPrimitive.Close>
    </DialogPrimitive.Content>
  </DialogPrimitive.Portal>
));
SheetContent.displayName = "SheetContent";
