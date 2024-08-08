import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure'; 
import { visionTool } from '@sanity/vision';
import { schemaTypes } from './schemaTypes';

const dataset = process.env.SANITY_ENV || 'production';
console.log(`Using dataset: ${dataset}`);

export default defineConfig({
  name: 'default',
  title: 'Day one with Sanity',

  projectId: process.env.SANITY_PROJECT || '9r4zkoar',
  dataset: dataset,

  plugins: [structureTool(), visionTool()], 

  schema: {
    types: schemaTypes,
  },
});
