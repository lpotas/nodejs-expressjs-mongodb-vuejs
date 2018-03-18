import mongoose from 'mongoose';

const dbURI = 'mongodb://localhost/items';
let db;

mongoose.connect(dbURI);
db = mongoose.connection;

// CONNECTION EVENTS
// When successfully connected
db.on('connected', () => {
    console.log('Mongoose default connection open to ' + dbURI);
});
// If the connection throws an error
db.on('error', (err) => {
    console.log('Mongoose default connection error: ' + err);
});
// When the connection is disconnected
db.on('disconnected', () => {
    console.log('Mongoose default connection disconnected');
});
// If the Node process ends, close the Mongoose connection 
process.on('SIGINT', () => {
    db.close(() => {
        console.log('Mongoose default connection disconnected through app termination');
        process.exit(0);
    });
});