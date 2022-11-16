const { MongoClient } = require("mongodb");
const uri = process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/';
const source = process.env.DATABASE || 'sessions-app';

module.exports = {
  getUserByCredentials: async (req, res) => {
    const client = new MongoClient(uri, { useUnifiedTopology: true });
    try {
      const { email, password } = req.headers;
      let user = await client.db(source).collection('users').findOne({ email: email, password: password });
      if (user) {
        res.json(user);
      } else {
        res.send({ msg: 'User not found' });
      }
    } finally {
      await client.close();
    }
  },

  createUser: async (req, res) => {
    console.log(req.body);
    const client = new MongoClient(uri, { useUnifiedTopology: true });
    try {
      const newUser = req.body;
      const Users = client.db(source).collection('users');;
      Users.insertOne({ ...newUser });
      res.json(newUser);
    } catch (err) {
      res.send(err);
    }
  }
};