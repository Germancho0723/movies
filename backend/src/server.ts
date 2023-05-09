import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import cors from 'cors';
import movieRouter from './routers/movie.router';
import { dbConnect } from './configs/database.config';
import repartoRouter from './routers/reparto.router';
dbConnect();

const app = express();
app.use(cors({
    credentials:true,
    origin:["http://localhost:4200","http://192.168.1.100:4200"]
}));

app.use("/api/movies", movieRouter)
app.use("/api/reparto", repartoRouter)

const port = 3000;
app.listen(port, () => {
    console.log("Sitio desde: http://localhost:" + port);
})