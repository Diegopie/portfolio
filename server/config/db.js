const mongoose = require('mongoose');

async function db() {
    try {
        mongoose.set("strictQuery", false);
        mongoose.connect(process.env.MONGODB_URI || 'mongodb://0.0.0.0:27017/d2-challenges', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        .then(() => {
            console.log('Successfully Connected To DB');
        })
        .catch(err=> {
            console.log(err);
        })
    } catch (error) {
        console.log('Error Connecting to DB');
        console.log(error);
    }
}

module.exports = db;