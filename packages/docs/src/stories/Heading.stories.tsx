import { Heading, TextProps } from "@sid-ui/react";
import { Meta, StoryObj } from "@storybook/react";

export default {
  title: 'Typography/Heading',
  component: Heading,
  args: {
    size: 'md',
    children: 'Custom Title',
  },
  argTypes: {
    size: {
      options: ['sm', 'md', 'lg', '2xl', '3xl', '4xl', '5xl', '6xl'],
      control: {
        type: 'inline-radio',
      },
    },
  },
} as Meta

export const Primary: StoryObj<TextProps> = {}

export const CustomTag: StoryObj<TextProps> = {
  args: {
    children: 'H1 Heading ',
    as: 'h1',
  },
  parameters: {
    docs: {
      description: {
        story:
          'Por padrão sempre sera um `h2`, mas podemos altera-lo para qualquer outro tag html usando o propriedade `as`',
      },
    },
  },
}
