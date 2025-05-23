import mongoose from 'mongoose';

const connection = {};

export const connectToDatabase = async () => {
    try {
        if (connection.isConnected) {
            console.log('Using existing connection');
            return;
        }

        console.log('Using new connection');
        
        const db = await mongoose.connect(process.env.MONGO_URI, {});

        console.log('DB connected');

        connection.isConnected = db.connections[0].readyState;
        console.log('Connected to database');
    } catch (error) {
        console.log('Error connecting to database: ', error);
    }
}