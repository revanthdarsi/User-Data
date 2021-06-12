/**
 * Connects To DataBase.
 * @date 2021/12/06
 * @author Revanth Darsi<revanth2000516@gmail.com>
 * @method dataBaseConnection
 * @param
 * This function connect to database by passing database url.
 * @Input DataBase URL
 * @returns {Connects To Mongodb}
 */

const mongoose = require("mongoose");

const dataBaseConnection = () => {
  try {
    mongoose
      .connect(process.env.URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      })
      .then(() => {
        console.log("Connected To Database Successfully");
      });
  } catch (err) {
    console.log(err);
  }
};

module.exports = dataBaseConnection;
