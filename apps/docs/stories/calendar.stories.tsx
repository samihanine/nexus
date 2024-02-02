import type { Meta, StoryObj } from "@storybook/react";
import { Calendar } from "@nexus/ui";

const meta: Meta<typeof Calendar> = {
  title: "UI/Calendar",
  component: Calendar,
  argTypes: {
    showOutsideDays: {
      control: { type: "boolean" },
      defaultValue: true,
    },
    selected: {
      control: { type: "date" },
    },
    modifiers: {
      control: { type: "object" },
    },
    fromDate: {
      control: { type: "date" },
    },
    toDate: {
      control: { type: "date" },
    },
    disabled: {
      control: { type: "boolean" },
    },
  },
  parameters: {
    layout: "centered",
  },
};

export default meta;

type Story = StoryObj<typeof Calendar>;

export const Default: Story = {
  args: {
    // Default args for the calendar
  },
};

export const WithSelectedDate: Story = {
  args: {
    selected: new Date(),
  },
};

export const WithDateRange: Story = {
  args: {
    modifiers: {
      start: new Date(),
      end: new Date(new Date().setDate(new Date().getDate() + 7)),
    },
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
};
