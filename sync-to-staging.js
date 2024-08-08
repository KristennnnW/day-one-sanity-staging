const { createClient } = require('@sanity/client');
require('dotenv').config();

const API_VERSION = '2023-01-01'; // Specify an appropriate API version

const stagingClient = createClient({
  projectId: process.env.SANITY_PROJECT,
  dataset: 'staging',
  token: process.env.SANITY_TOKEN,
  apiVersion: API_VERSION,
  useCdn: false,
});

const productionClient = createClient({
  projectId: process.env.SANITY_PROJECT,
  dataset: 'production',
  token: process.env.SANITY_TOKEN,
  apiVersion: API_VERSION,
  useCdn: false,
});

async function syncToProduction() {
  try {
    // Fetch all documents from the staging dataset
    const stagingDocuments = await stagingClient.fetch('*');

    for (const document of stagingDocuments) {
      const { _id, ...rest } = document;

      // Create or replace the document in the production dataset
      await productionClient.createOrReplace({
        ...rest,
        _id: _id.replace('drafts.', ''), // Remove 'drafts.' prefix if present
        _type: document._type,
      });

      console.log(`Document ${_id} synced to production`);
    }
  } catch (error) {
    console.error('Error syncing documents:', error);
  }
}

syncToProduction();
