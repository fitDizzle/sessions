const { MongoClient } = require("mongodb");
const uri = process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/';
const source = process.env.DATABASE || 'sessions-app';

module.exports = {
  getAllUsers: async (req, res) => {
    const client = new MongoClient(uri, { useUnifiedTopology: true });
    try {
      let users = await client.db(source).collection('users').find({}).toArray();
      res.json(users);
    } finally {
      await client.close();
    }
  }
};