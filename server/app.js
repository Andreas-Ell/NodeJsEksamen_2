import express from 'express';
import cors from 'cors';
import pool from './db.js';

import authRoute from './routes/authRoutes.js';
import experienceRoute from './routes/experienceRoutes.js';

const app = express();

app.use(cors());
app.use(express.json());


app.use('/api/experiences', experienceRoute);
app.use('/api/auth', authRoute);

const PORT = Number(process.env.PORT) || 8080;
app.listen(PORT, () => console.log("Server is running on port", PORT));
