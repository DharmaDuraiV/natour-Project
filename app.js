const express = require('express');
const morgan = require('morgan');
const userRoutes = require('./routes/userRoutes');
const tourRoutes = require('./routes/tourRoutes');

const app = express();
console.log(process.env.NODE_ENV);
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}
app.use(express.json());
app.use(express.static(`${__dirname}/public`));
app.use((req, res, next) => {
  req.requestedTime = new Date().toISOString();
  req.requestedTime1 = new Date().toLocaleString('en-IN');
  next();
});

app.use('/api/v1/tours', tourRoutes);
app.use('/api/v1/users', userRoutes);

module.exports = app;
