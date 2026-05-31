import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cn } from "@/lib/utils"

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  asChild?: boolean
  variant?: 'default' | 'outline' | 'ghost' | 'amber'
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, asChild = false, variant = 'default', ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(
          "inline-flex items-center justify-center font-bodoni tracking-widest uppercase text-xs transition-all duration-300 focus:outline-none disabled:opacity-50",
          variant === 'default' && "px-6 py-3 bg-amber text-parchment border border-amber hover:bg-amber-bright",
          variant === 'outline' && "px-6 py-3 border border-gold/40 text-parchment-dim hover:border-gold hover:text-parchment",
          variant === 'ghost' && "px-4 py-2 text-parchment-dim hover:text-parchment hover:bg-white/5",
          variant === 'amber' && "px-6 py-3 border border-amber/50 text-amber hover:bg-amber/10 hover:border-amber",
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button }
