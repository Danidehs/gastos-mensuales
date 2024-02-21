require('dotenv').config(); // Make sure to install the dotenv package
const connectDB = require('./config/db');

connectDB()
  .then(() => {
    console.log('Database connection successful');
    process.exit(0); // Exit the process successfully
  })
  .catch((err) => {
    console.error('Database connection failed:', err.message);
    process.exit(1); // Exit with error
  });
