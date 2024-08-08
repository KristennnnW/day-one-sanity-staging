import { defineConfig } from 'sanity';
import { RobotIcon, RocketIcon } from '@sanity/icons';
import { structureTool } from 'sanity/structure'; 
import { visionTool } from '@sanity/vision';
import { schemaTypes } from './schemaTypes';

// const dataset = process.env.SANITY_ENV || 'production';
// console.log(`Using dataset: ${dataset}`);

// export default defineConfig({
//   name: 'default',
//   title: 'Day one with Sanity',

//   projectId: process.env.SANITY_PROJECT || '9r4zkoar',
//   dataset: dataset,

//   plugins: [structureTool(), visionTool()], 

//   schema: {
//     types: schemaTypes,
//   },
// });

export default defineConfig([
  {
    projectId: '9r4zkoar',
    dataset: 'production',
    name: 'production-workspace',
    basePath: '/production',
    title: 'Production Workspace',
    subtitle: 'production',
    icon: RobotIcon,
    plugins: [structureTool(), visionTool()],
    schema: {
      types: schemaTypes,
    },
  },
  {
    projectId: '9r4zkoar',
    dataset: 'staging',
    name: 'staging-workspace',
    basePath: '/staging',
    title: 'Staging Workspace',
    subtitle: 'staging',
    icon: RocketIcon,
    plugins: [structureTool(), visionTool()],
    schema: {
      types: schemaTypes,
    },
  },
]);

