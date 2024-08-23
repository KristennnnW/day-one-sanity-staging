// ./src/app/sanity.loader.server.ts
import {createClient} from '@sanity/client'
import {setServerClient, loadQuery} from './sanity.loader'
import { useLiveMode } from './sanity.loader'

const client = createClient({
  projectId: process.env.SANITY_PROJECT_ID,
  dataset: process.env.SANITY_DATASET,
  useCdn: true,
  apiVersion: process.env.SANITY_API_VERSION,
  stega: {
    enabled: true,
    studioUrl: 'https://my.sanity.studio',
  },
})

setServerClient(client)

// Re-export for convenience
export {loadQuery}