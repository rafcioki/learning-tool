import mongoose, { Schema } from 'mongoose';

const initDb = () => {
  mongoose.connect('mongodb://127.0.0.1/my_database');
  mongoose.Promise = global.Promise;

  const db = mongoose.connection;

  db.on('error', console.error.bind(console, 'MongoDB connection error'));
};

export { initDb };
