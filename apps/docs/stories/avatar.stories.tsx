import type { Meta, StoryObj } from "@storybook/react";
import { Avatar } from "@nexus/ui";

const meta: Meta<typeof Avatar> = {
  title: "UI/Avatar",
  component: Avatar,
  argTypes: {
    src: {
      control: { type: "text" },
      description: "Image source URL",
    },
    className: {
      control: { type: "text" },
      description: "CSS classes to apply",
    },
  },
  parameters: {
    backgrounds: {
      default: "light",
    },
  },
};

export default meta;

type Story = StoryObj<typeof Avatar>;

export const Default: Story = {
  args: {
    src: "https://via.placeholder.com/150",
    className: "w-16 h-16",
  },
};

export const WithError: Story = {
  args: {
    src: "https://example.com/broken-link",
    className: "w-16 h-16",
  },
};

export const CustomSize: Story = {
  args: {
    src: "https://via.placeholder.com/150",
    className: "w-24 h-24",
  },
};
