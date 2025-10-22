require('dotenv').config({ path: '../../config.env', quiet: true });
const fs = require('fs');
// const app = require('./app');
const mongoose = require('mongoose');
const Tour = require('../../models/tourModel');

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

const tours = JSON.parse(fs.readFileSync('./tours-simple.json', 'utf-8'));
const importData = async () => {
  try {
    await Tour.create(tours);
    console.log('data inserted successfully');
  } catch (error) {
    console.log(error);
  }
  process.exit();
};

const deleteData = async () => {
  try {
    await Tour.deleteMany();
    console.log('data deleted successfully');
  } catch (error) {
    console.log(error);
  }
  process.exit();
};

// console.log(process.argv);

if (process.argv[2] === '--import') {
  importData();
} else if (process.argv[2] === '--delete') {
  deleteData();
}
