const Tour = require('../models/tourModel');
// const fs = require('node:fs');

// const tours = JSON.parse(
//   fs.readFileSync(`${__dirname}/../dev-data/data/tours-simple.json`, 'utf-8')
// );

// exports.checkID = (req, res, next, val) => {
//   console.log(`this is id :${val}`);
//   const id = req.params.id * 1;
//   if (id > tours.length) {
//     return res.status(400).json({
//       status: 'Fail',
//       message: 'Invalid Id',
//     });
//   }
//   next();
// };
// create the checkBody middleware
// if name and price is not avaliable throw the err
// if not there send the statuscode 400
// pass the check body in the post req
// exports.checkBody = (req, res, next) => {
//   if (!(req.body.name && req.body.price)) {
//     return res.status(400).json({
//       status: 'fail',
//       message: 'name or pice field is missing',
//     });
//   }
//   next();
// };

exports.getAllTours = async (req, res) => {
  const tours = await Tour.find();
  res.status(200).json({
    status: 'success',
    result: tours.length,
    data: {
      tours,
    },
  });
};

exports.getTour = async (req, res) => {
  // const id = req.params.id * 1;
  // const tour = tours.find((el) => el.id === id);

  // if (id > tours.length)
  // if (!tour) {
  //   return res.status(200).json({
  //     status: 'Fail',
  //     message: 'Invalid',
  //   });
  // }
  const id = req.params.id;

  // const tours = await Tour.findOne({_id:id});
  const tour = await Tour.findById(id);

  res.status(200).json({
    status: 'success',
    requestedAt: req.requestedTime,
    reqestedAt1: req.requestedTime1,
    data: {
      tour,
    },
  });
};
exports.createTour = async (req, res) => {
  try {
    // console.log(req.body);
    // const newTour = new Tour(req.body);
    // await newTour.save();

    const newTour = await Tour.create(req.body);
    res.status(201).json({
      status: 'success',
      data: {
        newTour,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: 'fail',
      message: 'Invalid data send !',
    });
  }
};

exports.updateTour = (req, res) => {
  // const id = req.params.id * 1;

  // if (id > tours.length) {
  //   return res.status(400).json({
  //     status: 'Fail',
  //     message: 'Invalid Id',
  //   });
  // }
  res.status(200).json({
    status: 'success',
    data: `< Tour not updated yet >`,
  });
};

exports.deleteTour = async (req, res) => {
  // await Tour.deleteOne({ _id: req.params.id });
  await Tour.findByIdAndDelete(req.params.id);

  res.status(204).json({
    status: 'success',
    data: null,
  });
};
