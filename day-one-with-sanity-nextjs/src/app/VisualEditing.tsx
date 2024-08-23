// ./src/app/VisualEditing.tsx
import {enableVisualEditing, type HistoryUpdate} from '@sanity/visual-editing'
import {useEffect} from 'react'
import {useLiveMode} from '~/sanity.loader'

// A browser client for Live Mode, it's only part of the browser bundle when the `VisualEditing` component is lazy loaded with `React.lazy`
const client = createClient({
  projectId: window.ENV.SANITY_PROJECT_ID,
  dataset: window.ENV.SANITY_DATASET,
  useCdn: true,
  apiVersion: window.ENV.SANITY_API_VERSION,
  stega: {
    enabled: true,
    studioUrl: 'https://my.sanity.studio',
  },
})

export default function VisualEditing() {
  useEffect(
    () =>
      enableVisualEditing({
        history: {
          // setup Remix router integration
        },
      }),
    [],
  )

  useLiveMode({client})

  return null
}