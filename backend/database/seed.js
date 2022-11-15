const fs = require("fs");
const { MongoClient } = require("mongodb");

const uri = process.env.MONGO_URI || 'mongodb://127.0.0.1:27017';
const source = process.env.DATABASE || 'sessions-app';
const client = new MongoClient(uri, { useUnifiedTopology: true });

// models
const { Club } = require('./models/club.js');

let parsedClubs = [];

const loadData = async () => {

  await fs.createReadStream('/Users/markclark/Desktop/MVP/backend/database/data/health-clubs.csv', { encoding: "utf-8" })
    .on("data", (chunk) => {
      setTimeout(() => {

      }, 1000);

      let currentChunk = chunk.split(/\n/).map((x) => x.split(',')).map((chunk) => {
        const id = +chunk[0];
        const biz_name = chunk[1];
        const biz_info = chunk[2];
        const biz_phone = chunk[3];
        const biz_phone_ext = chunk[4];
        const e_address = chunk[5];
        const e_city = chunk[6];
        const e_state = chunk[7];
        const e_postal = chunk[8];
        const e_zip_full = chunk[9];
        const e_country = chunk[10];
        const web_url = chunk[22].length > 0 ? chunk[22] : 'www.unknownclub.com';
        const web_meta_title = chunk[23];
        const web_meta_desc = chunk[24];
        const web_meta_keys = chunk[25];

        const newClub = new Club(id, biz_name, biz_info, biz_phone, biz_phone_ext, e_address, e_city, e_state, e_postal, e_zip_full, e_country, web_url, web_meta_title, web_meta_desc, web_meta_keys);
        parsedClubs.push(newClub);

        return newClub;
      });

    })
    .on("error", (error) => {
      console.log(error);
    });
};

loadData();

async function seedData() {
  async function run() {
    console.log('attempting to seed');
    try {
      await client.connect();
      const clubs = await client.db(source).createCollection('clubs');
      parsedClubs.forEach((club) => {
        clubs.insertOne({ ...club });
      });
      console.log('done seeding db');
    } catch (err) {
      console.log(err);
    }
  }

  run().catch(console.dir);
}

seedData();
