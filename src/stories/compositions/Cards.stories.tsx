// Replace your-framework with the framework you are using, e.g. react-vite, nextjs, vue3-vite, etc.
import type { Meta } from '@storybook/react';
 
import { Card } from 'compositions';
 
const meta = {
  component: Card,
  //👇 Enables auto-generated documentation for this component and includes all stories in this file
  tags: ['autodocs'],
} satisfies Meta<typeof Card>;
export default meta;