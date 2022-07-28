const mongoose = require('mongoose');

async function connect() {
    try{
        await mongoose.connect('mongodb://localhost:27017/quan_education_dev', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            //useCreateIndex: true,
        });
        console.log("Successfully");
    } catch (err) {
        console.log("Failure");
    }
}

module.exports = {connect};