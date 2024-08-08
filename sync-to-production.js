const { createClient } = require('@sanity/client');
require('dotenv').config(); // Ensure dotenv is loaded to read .env file

const API_VERSION = '2023-01-01'; // Specify an appropriate API version

const stagingClient = createClient({
  projectId: '9r4zkoar',
  dataset: 'staging',
  token: process.env.SANITY_TOKEN,
  apiVersion: API_VERSION, // Use the API version
  useCdn: false,
});

const prodClient = createClient({
  projectId: '9r4zkoar',
  dataset: 'production',
  token: process.env.SANITY_TOKEN,
  apiVersion: API_VERSION, // Use the API version
  useCdn: false,
});

async function syncToProduction() {
  try {
    const publishedDocuments = await stagingClient.fetch('*[_type == "event" && isPublished == true]');

    for (const document of publishedDocuments) {
      const { _id, ...rest } = document;

      await prodClient.createOrReplace({
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
