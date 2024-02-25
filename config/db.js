const mongoose = require('mongoose');

let connection = null;

const connectDB = async () => {
  if (connection && mongoose.connection.readyState === 1) {
    console.log('Using existing database connection');
    return Promise.resolve(connection);
  } else {
    console.log('Creating new database connection');
    connection = mongoose
      .connect(process.env.MONGO_URI, {
        bufferCommands: false,
      })
      .then((conn) => {
        console.log('Database Connected');
        return conn;
      })
      .catch((err) => {
        console.error('Database Connection Error:', err);
        throw err;
      });

    return connection;
  }
};

module.exports = connectDB;
