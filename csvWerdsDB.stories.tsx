import React from 'react';
import type {Meta, StoryObj} from '@storybook/react';

import {csvWerdsDB} from './csvWerdsDB';

const meta: Meta<typeof csvWerdsDB> = {
  component: csvWerdsDB,
};

export default meta;

type Story = StoryObj<typeof csvWerdsDB>;

export const Basic: Story = {args: {}};
