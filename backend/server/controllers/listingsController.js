const { MongoClient } = require("mongodb");
const uri = process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/';
const source = process.env.DATABASE || 'sessions-app';

module.exports = {
  getAllListings: async (req, res) => {
    const client = new MongoClient(uri, { useUnifiedTopology: true });
    try {
      let listings = await client.db(source).collection('listings').find({}).toArray();
      res.send(listings);
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
      let listings = await client.db(source).collection('listings').find({}).toArray();
      res.json(listings);
    } finally {
      await client.close();
    }
  },

  createNewListing: async (req, res) => {
    const { userId, clubName, clubAddress, clubState, clubCity, clubZipCode, sessionCount, sessionPrice } = req.body;
    const client = new MongoClient(uri, { useUnifiedTopology: true });
    try {
      const newListing = { userId, clubName, clubAddress, clubCity, clubState, clubZipCode, sessionCount, sessionPrice };
      let Listings = await client.db(source).collection('listings');
      Listings.insertOne({ ...newListing });
      console.log(newListing)
      res.json(newListing);
    } catch (err) {
      res.send(err);
    }
  }
};