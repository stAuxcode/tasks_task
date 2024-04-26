const mongoose = require('mongoose');

require('dotenv').config();

let mongoInstance: any;

module.exports = async function instantiateDatabase() {
  if (!mongoInstance || mongoInstance.connection.readyState === 0) {
    mongoose.Promise = global.Promise;
    await mongoose.connect(process.env.DATABASE_URL, {
      connectTimeoutMS: 300000
    }).then(() => {
      console.log('Successfully connected to the database');
    }).catch((err: any) => {
      console.log('Could not connect to the database. Exiting now...', err);
    });
    mongoInstance = mongoose;
  }
  return mongoInstance;
};
