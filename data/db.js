// Import the mongoose module
const mongoose = require("mongoose");

// Set `strictQuery: false` to globally opt into filtering by properties that aren't in the schema
// Included because it removes preparatory warnings for Mongoose 7.
// See: https://mongoosejs.com/docs/migrating_to_6.html#strictquery-is-removed-and-replaced-by-strict
mongoose.set('strictQuery', false);

// Define the database URL to connect to.
const dev_mongoDB = "mongodb+srv://admin:7m8t6mYCFbIfKG1X@cluster0.6tkyckz.mongodb.net/local_library?retryWrites=true&w=majority";
const mongoDB = process.env.MONGODB_URL || dev_mongoDB;

// Wait for database to connect, logging an error if there is a problem 
main(); //.catch(err => console.log(err));
function main() {
  mongoose.connect(mongoDB)
  .then(() => console.log("MongoDB connected"))
  .catch((reason) => console.error("MongoDB error", reason));
}

module.exports = mongoose;
