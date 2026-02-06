import * as React from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cva } from 'class-variance-authority'

import { cn } from '../../lib/utils'

const buttonVariants = cva(
  'inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold/40 focus-visible:ring-offset-2 focus-visible:ring-offset-white disabled:pointer-events-none disabled:opacity-50 dark:focus-visible:ring-offset-brand-dark',
  {
    variants: {
      variant: {
        default:
          'bg-slate-900 text-white hover:bg-slate-900/90 dark:bg-white dark:text-slate-900 dark:hover:bg-white/90',
        gold:
          'bg-brand-gold text-brand-dark hover:brightness-95 shadow-sm',
        outline:
          'border border-slate-200 bg-transparent hover:bg-slate-50 dark:border-white/10 dark:hover:bg-white/5',
        ghost:
          'bg-transparent hover:bg-slate-100 dark:hover:bg-white/5',
      },
      size: {
        default: 'h-10 px-4 py-2',
        sm: 'h-9 px-3',
        lg: 'h-11 px-6',
        xl: 'h-12 px-7 text-base',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
)

const Button = React.forwardRef(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button'
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = 'Button'

export { Button, buttonVariants }

