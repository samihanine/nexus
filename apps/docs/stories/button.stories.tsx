import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "@nexus/ui";

const meta: Meta<typeof Button> = {
  title: "UI/Button",
  component: Button,
  argTypes: {
    children: {
      control: { type: "text" },
    },
    variant: {
      control: { type: "radio" },
      options: [
        "default",
        "destructive",
        "outline",
        "secondary",
        "ghost",
        "link",
        "action",
      ],
    },
    size: {
      control: { type: "radio" },
      options: ["sm", "default", "lg"],
    },
  },
};

export default meta;

type Story = StoryObj<typeof Button>;

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/react/api/csf
 * to learn how to use render functions.
 */
export const Primary: Story = {
  render: (props) => (
    <Button
      {...props}
      onClick={(): void => {
        // eslint-disable-next-line no-alert -- alert for demo
        console.log("Hello from Turborepo!");
      }}
    />
  ),
  name: "Button",
  args: {
    children: "Hello from Turborepo!",
    variant: "default",
    size: "default",
  },
};
