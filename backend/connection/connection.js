const mongoose = require('mongoose');

const connection = async (req, res) => {
    try {
        await mongoose.connect( 'mongodb+srv://samaymaheshwari05:Samay1234@cluster0.hha4x6q.mongodb.net/').then(() => {
        console.log('Connected to MongoDB');
    })
    } catch (error) {
        
        console.error('Error connecting to MongoDB:', error.message);
        throw error;
    }
};
connection();
