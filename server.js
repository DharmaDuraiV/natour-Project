require('dotenv').config({ path: './config.env', quiet: true });

const app = require('./app');
const mongoose = require('mongoose');

// console.log(app.get('env'));
// console.log(process.env);

const DB_URL = process.env.MONGODB_GLOBAL.replace(
  '<PASSWORD>',
  process.env.MONGODB_PASSWORD
);

mongoose
  .connect(DB_URL)
  .then(() => {
    console.log('connect to mongodb server');
  })
  .catch((err) => {
    console.log('Error 💥:', err.stack);
  });

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on port http://localhost:${PORT}/`);
});
