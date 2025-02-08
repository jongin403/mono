import { Link } from '@repo/ui/link';
import type { Meta, StoryFn } from '@storybook/react';

const meta = {
  title: 'Example/Link',
  component: Link,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof Link>;

export default meta;

const Template: StoryFn<typeof Link> = (args) => {
  return <Link {...args}>Next.js</Link>;
};

export const Base = Template.bind({});

Base.args = {
  href: 'https://nextjs.org/',
  newTab: true,
};
