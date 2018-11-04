import express from 'express';
import { Request, Response } from 'express';
import mongoose, { Schema } from 'mongoose';
import { initDb } from './db';

initDb();

const userSchema : Schema = new mongoose.Schema({ name: String });

const userModel = mongoose.model('User', userSchema);

const user = new userModel({ name: 'Johnny' });

user.save(() => {});

const app = express();

app.listen(8000, () => console.log('Server running on 8000 with auto restart!'));

app.get('/', (req : Request, res : Response) => {
  res.send('Lets show why breakpoints rock!');
});
