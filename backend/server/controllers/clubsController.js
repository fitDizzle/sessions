const { MongoClient } = require("mongodb");
const uri = process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/';
const source = process.env.DATABASE || 'sessions-app';

module.exports = {
  getAllClubs: async (req, res) => {
    console.log('all clubs controller hit')
    const client = new MongoClient(uri, { useUnifiedTopology: true });
    try {
      let clubs = await client.db(source).collection('clubs').find({}).toArray();
      res.json(clubs);
    } finally {
      await client.close();
    }
  }
};