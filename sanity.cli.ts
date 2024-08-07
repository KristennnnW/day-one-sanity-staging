import { defineCliConfig } from 'sanity/cli';

const dataset = process.env.SANITY_ENV || 'production';

export default defineCliConfig({
  api: {
    projectId: '9r4zkoar',
    dataset,
  },
});
