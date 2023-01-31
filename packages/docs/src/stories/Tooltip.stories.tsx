import { Box, Button, Tooltip, TooltipProps } from "@sid-ui/react";
import { Meta, StoryObj } from "@storybook/react";

export default {
  title: 'Data Display/Tooltip',
  component: Tooltip,
  args: {
    children: <Button>Hover</Button>,
    content: 'Tooltip content',
  },
  argTypes: {
    children: {
      control: {
        type: null,
      },
    },
    size: {
      options: ['sm', 'md', 'lg'],
      control: {
        type: 'inline-radio',
      },
      defaultValue: 'sm',
    },
    side: {
      options: ['top', 'right', 'bottom', 'left'],
      control: {
        type: 'inline-radio',
      },
      defaultValue: 'top',
    },
  },
  decorators: [
    (Story) => (
      <Box
        css={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          padding: '$16',
        }}
      >
        {Story()}
      </Box>
    ),
  ],
} as Meta

export const Primary: StoryObj<TooltipProps> = {}

export const Large: StoryObj<TooltipProps> = {
  args: {
    size: 'lg',
  },
}

export const Bottom: StoryObj<TooltipProps> = {
  args: {
    side: 'bottom',
  },
}
