const { MongoClient } = require("mongodb");
const uri = process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/';
const source = process.env.DATABASE || 'sessions-app';

module.exports = {
  getMessagesByUser: async (req, res) => {
    const client = new MongoClient(uri, { useUnifiedTopology: true });
    try {
      let listing = await client.db(source).collection('listing').find({}).toArray();
      res.json(listing);
    } finally {
      await client.close();
    }
  },

  getMessagesByListing: async (req, res) => {
    const client = new MongoClient(uri, { useUnifiedTopology: true });
    try {
      let listing = await client.db(source).collection('listing').find({}).toArray();
      res.json(listing);
    } finally {
      await client.close();
    }
  },

  createNewMessage: async (req, res) => {
    const client = new MongoClient(uri, { useUnifiedTopology: true });
    try {
      let message = await client.db(source).collection('message').find({}).toArray();
      res.json(message);
    } finally {
      await client.close();
    }
  }
};