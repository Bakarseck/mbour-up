import type * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "inline-flex items-center rounded-full px-3 py-1 text-xs font-medium ring-1 ring-inset transition-colors",
  {
    variants: {
      variant: {
        entrepreneuriat: "bg-ocean/10 text-ocean ring-ocean/20",
        culture: "bg-gold/10 text-gold ring-gold/20",
        migration: "bg-palm/10 text-palm ring-palm/20",
        agriculture: "bg-green-100 text-green-800 ring-green-600/20",
        climat: "bg-blue-100 text-blue-800 ring-blue-600/20",
        default: "bg-gray-100 text-gray-800 ring-gray-600/20",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
)

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof badgeVariants> {}

function ThemeBadge({ className, variant, ...props }: BadgeProps) {
  return <div className={cn(badgeVariants({ variant }), className)} {...props} />
}

export { ThemeBadge, badgeVariants }
