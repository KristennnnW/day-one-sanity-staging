import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import { visionTool } from '@sanity/vision';
import { schemaTypes } from './schemaTypes';

const getConfig = () => {
  const env = process.env.SANITY_ENV || 'production'; // Use 'production' as the default
  return {
    projectId: '9r4zkoar',
    dataset: env,
  };
};

export default defineConfig({
  name: 'default',
  title: 'Day one with Sanity',

  ...getConfig(),

  plugins: [structureTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
});
