const mongoose = require('mongoose')
require('dotenv').config();

const dbUrl = process.env.MONGO_URI;

const connectDB = async () => {
   try {
await mongoose.connect(dbUrl);
console.log('MongoDB connected...')
   } catch (error) {
    console.log('MongoDB Connection error', error.messaage);
    process.exit(1)
   }
}

module.exports = connectDB;

