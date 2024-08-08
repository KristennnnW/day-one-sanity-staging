const { createClient } = require('@sanity/client');
require('dotenv').config(); // Ensure dotenv is loaded to read .env file

const API_VERSION = '2023-01-01'; // Specify an appropriate API version

const productionClient = createClient({
  projectId: '9r4zkoar',
  dataset: 'production',
  token: process.env.SANITY_TOKEN,
  apiVersion: API_VERSION, // Use the API version
  useCdn: false,
});

const stagingClient = createClient({
  projectId: '9r4zkoar',
  dataset: 'staging',
  token: process.env.SANITY_TOKEN,
  apiVersion: API_VERSION, // Use the API version
  useCdn: false,
});

async function syncToStaging() {
  try {
    // Fetch all documents from the production dataset
    const productionDocuments = await productionClient.fetch('*');

    for (const document of productionDocuments) {
      const { _id, ...rest } = document;

      // Create or replace the document in the staging dataset
      await stagingClient.createOrReplace({
        ...rest,
        _id: _id.replace('drafts.', ''), // Remove 'drafts.' prefix if present
        _type: document._type,
      });

      console.log(`Document ${_id} synced to staging`);
    }
  } catch (error) {
    console.error('Error syncing documents:', error);
  }
}

syncToStaging();
