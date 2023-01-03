import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import mongoose from 'mongoose';

import usersRoutes from './routes/users.js';

const app = express();

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

app.use('/users',usersRoutes);

const CONNECTION_URL = "mongodb+srv://viniciuskimura442:viniciuskimura442123@caquitodb.zonrxxx.mongodb.net/?retryWrites=true&w=majority"
const PORT = process.env.PORT || 5000;


app.get('/', (req, res) => res.send("Hello from Homepage"));

mongoose.set('strictQuery', true);

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => app.listen(PORT, () => console.log(`server running on port: http://localhost:${PORT}`)))
    .catch((error) => console.log(error.message))



