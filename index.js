import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

import usersRoutes from './routes/users.js';
import lessonsRoutes from './routes/lessons.js'

dotenv.config();

const app = express();

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

app.use('/users',usersRoutes);
app.use('/lessons',lessonsRoutes);

const PORT = process.env.PORT || 5000;

app.get('/', (req, res) => res.send("Hello from Homepage"));

mongoose.set('strictQuery', true);

mongoose.connect(process.env.CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => app.listen(PORT, () => console.log(`server running on port: http://localhost:${PORT}`)))
    .catch((error) => console.log(error.message))



