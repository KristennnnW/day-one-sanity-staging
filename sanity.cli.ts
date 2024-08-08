import { defineCliConfig } from 'sanity/cli';

const dataset = process.env.SANITY_ENV || 'production';

console.log(`Using dataset: ${dataset}`);

export default defineCliConfig({
  api: {
    projectId:  process.env.SANITY_PROJECT ||'9r4zkoar',
    dataset:dataset,
  },
});
