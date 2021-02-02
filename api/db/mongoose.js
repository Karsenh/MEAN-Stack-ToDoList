// This file handles connection logic to MonogoDB (database)
const mongoose = require('mongoose');


// Mongoose Currently uses Bluebud - This manually sets it to use Global JavaScript Promise
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/TaskManager', { useNewUrlParser: true}).then(() => {
    console.log("Successfully connected to MongoDB!");
}).catch((e) => {
    console.log("Error while attempting to connect to MongoDB");
    console.log(e);
});

// To prevent deprecation warnings (from MongoDB native driver)
mongoose.set('useCreateIndex', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useNewUrlParser', true);

// Exports the mongoose object
module.exports = {
    mongoose
};