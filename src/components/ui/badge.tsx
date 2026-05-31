import * as React from "react"
import { cn } from "@/lib/utils"

interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {}

function Badge({ className, ...props }: BadgeProps) {
  return (
    <div
      className={cn(
        "inline-flex items-center px-2.5 py-0.5 rounded-sm text-xs font-bodoni font-medium border border-amber/30 bg-amber/10 text-parchment-dim tracking-widest uppercase transition-colors",
        className
      )}
      {...props}
    />
  )
}

export { Badge }
