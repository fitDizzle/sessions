const { MongoClient } = require('mongodb');
const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);

// Database Name
const dbName = 'sessions-app';

async function main() {
  await client.connect();
  console.log('Connected successfully to server');
  const db = await client.db(dbName);
  const clubs = await db.collection('clubs').find({}).toArray();

  // return 'done.';
}

main()
  .then(console.log)
  .catch(console.error)
  .finally(() => client.close());