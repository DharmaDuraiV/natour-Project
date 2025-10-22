const { Schema, model } = require('mongoose');

const TourSchema = new Schema({
  name: String,
  age: Number,
});

const Tour = model('tour', TourSchema);

module.exports = Tour;
