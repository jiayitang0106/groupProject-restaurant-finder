const mongoose = require('mongoose');
const Restaurants = require('./restaurant.js');

mongoose.set('useCreateIndex', true);

const db = mongoose.connection;

mongoose.connect('mongodb://mongo:27017/zagat', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('Database connected'))
  .catch(err => console.log(err));


const get = (id) => {
  return new Promise((resolve, reject) => {
    Restaurants.find({ id })
      .exec((err, docs) => {
        if (err) {
          reject(err);
        }
        resolve(docs);
      });
  });
};

module.exports = { db, get };

//'mongodb://mongo:27017/zagat' ||
