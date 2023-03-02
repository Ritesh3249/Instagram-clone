const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config({ path: "./config.env" });

const mongoURL = process.env.DATABASE;

const connectToMongo = () => {
    mongoose.set('strictQuery', false);

  mongoose
    .connect(mongoURL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("connected to the Mongoose");
    })
    .catch((err) => {
      console.log(err);
      console.log("no connection");
    });
};

module.exports = connectToMongo;
