import * as Tooltip from "@radix-ui/react-tooltip";

import { styled } from "../../styles";

export const TooltipContent = styled(Tooltip.Content, {
  lineHeight: 0,
  color: '$gray100',
  userSelect: 'none',
  borderRadius: '$xs',
  fontWeight: '$medium',
  fontFamily: '$default',
  backgroundColor: '$gray600',
  filter: 'drop-shadow(4px 16px 24px rgba(0, 0, 0, 0.25))',

  variants: {
    size: {
      sm: {
        fontSize: '$xs',
        padding: '$3 $4',
      },
      md: {
        fontSize: '$sx',
        padding: '$4 $5',
      },
      lg: {
        fontSize: '$md',
        padding: '$5 $6',
      },
    },
  },

  defaultVariants: {
    size: 'sm',
  },
})

export const TooltipArrow = styled(Tooltip.Arrow, {
  fill: '$gray600',
})
