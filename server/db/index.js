const mongoose = require('mongoose');
const Restaurants = require('./restaurant.js');

mongoose.set('useCreateIndex', true);

mongoose.connect('mongodb://localhost/zagat', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('Database connected'))
.catch(err => console.log(err));

const db = mongoose.connection;


const get = (id) => {
  return new Promise((resolve, reject) => {
    Restaurants.find({ 'id': id })
      .exec((err, docs) => {
        if (err) {
          reject(err);
        }
        resolve(docs);
      });
  });
}

module.exports = { db, get };

