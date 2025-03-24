import type { Meta, StoryObj } from '@storybook/react';

import { Icon } from '.';
import { iconIdList } from './iconIdList';

const meta: Meta<typeof Icon> = {
  title: 'Example/Icon',
  component: Icon,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: 'fullscreen',
  },
} satisfies Meta<typeof Icon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const OneItem: Story = {
  render: (args) => {
    return (
      <>
        {iconIdList.map((id) => (
          <div key={id}>
            <Icon id={id} size={50} color={'skyblue'} />
            {id}
          </div>
        ))}
      </>
    );
  },
};
