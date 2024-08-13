import express from 'express'
import { connectDB } from './config/DBConnect.js'
import {config} from 'dotenv'
import movieRouter from './routes/movie.routes.js';
import userRouter from './routes/user.routes.js';
config();

const app = express();
const PORT = process.env.PORT || 5000;


app.use(express.json());
app.use("/movies", movieRouter);
app.use('/watchlist', userRouter);

connectDB().then(() =>{
    app.listen(PORT, () =>{
        console.log(`Server is up and running on ${PORT} `);
    })
});