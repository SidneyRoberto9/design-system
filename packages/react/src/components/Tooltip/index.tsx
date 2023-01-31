import * as TooltipSource from "@radix-ui/react-tooltip";
import { ComponentProps, ReactNode } from "react";

import { TooltipArrow, TooltipContent } from "./styles";

export interface TooltipProps
  extends ComponentProps<typeof TooltipSource.Root> {
  content: string | ReactNode
  size: 'sm' | 'md' | 'lg'
  side: 'top' | 'right' | 'bottom' | 'left'
}

export function Tooltip({
  content,
  children,
  size,
  side,
  ...props
}: TooltipProps) {
  return (
    <TooltipSource.Provider>
      <TooltipSource.Root {...props}>
        <TooltipSource.Trigger asChild>{children}</TooltipSource.Trigger>
        <TooltipSource.Portal>
          <TooltipContent size={size} side={side}>
            <TooltipArrow />
            {content}
          </TooltipContent>
        </TooltipSource.Portal>
      </TooltipSource.Root>
    </TooltipSource.Provider>
  )
}

Tooltip.displayName = 'Tooltip'
