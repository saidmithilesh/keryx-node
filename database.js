const mongoose = require('mongoose');
const connectionString = process.env.MONGODB_CONNECTION_URL;
const connectionOptions = {
    useNewUrlParser: true,
    useUnifiedTopology: true
}

exports.connect = async function () {
    return mongoose.connect(connectionString, connectionOptions);
}