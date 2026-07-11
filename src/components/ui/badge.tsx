import * as React from "react";
import { cn } from "@/lib/utils";

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "default" | "secondary" | "outline";
}

function Badge({ className, variant = "default", ...props }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold transition-colors",
        variant === "default" && "bg-primary text-white",
        variant === "secondary" && "bg-secondary text-primary-dark",
        variant === "outline" && "border border-primary text-primary",
        className
      )}
      {...props}
    />
  );
}

export { Badge };
