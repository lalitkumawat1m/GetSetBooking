import express from 'express'
import dotenv from 'dotenv'
import connectDB from './mongodb/connect.js';

const app = express();
dotenv.config();












const startServer = async () => {
    try {
       connectDB(process.env.MONGODB_URL);
        app.listen(8800, () => console.log('Server started on port 8800'));
    } catch (error) {
        console.log(error);
    }
};

startServer();
