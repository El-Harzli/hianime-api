import express from 'express';
import dotenv from 'dotenv';
import connectDB from './src/config/db.js';
import cookieParser from 'cookie-parser';

import authRoute from './src/routes/auth.route.js';

dotenv.config();
const PORT = process.env.PORT || '5000';
const app = express();

app.use(express.json());
app.use(cookieParser());

app.use('/api/v2/auth', authRoute);

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`App listening on PORT : ${PORT}`);
  });
});
