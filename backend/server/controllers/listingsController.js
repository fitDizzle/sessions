const { MongoClient } = require("mongodb");
const uri = process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/';
const source = process.env.DATABASE || 'sessions-app';

module.exports = {
  getAllListings: async (req, res) => {
    console.log('hit')
    const client = new MongoClient(uri, { useUnifiedTopology: true });
    try {
      let listing = await client.db(source).collection('listing').find({}).toArray();
      res.json(listing);
    } finally {
      await client.close();
    }
  },

  getListingByClub: async (req, res) => {
    console.log('hit')
    const client = new MongoClient(uri, { useUnifiedTopology: true });
    try {
      let listing = await client.db(source).collection('listing').find({}).toArray();
      res.json(listing);
    } finally {
      await client.close();
    }
  },

  getListingById: async (req, res) => {
    console.log('hit')
    const client = new MongoClient(uri, { useUnifiedTopology: true });
    try {
      let listing = await client.db(source).collection('listing').find({}).toArray();
      res.json(listing);
    } finally {
      await client.close();
    }
  },

  getListingByUserId: async (req, res) => {
    console.log('hit')
    const client = new MongoClient(uri, { useUnifiedTopology: true });
    try {
      let listing = await client.db(source).collection('listing').find({}).toArray();
      res.json(listing);
    } finally {
      await client.close();
    }
  },

  createNewListing: async (req, res) => {
    const client = new MongoClient(uri, { useUnifiedTopology: true });
    try {
      let listing = await client.db(source).collection('listing').find({}).toArray();
      res.json(listing);
    } finally {
      await client.close();
    }
  }
};