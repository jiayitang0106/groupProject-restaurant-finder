const mongoose = require('mongoose');


mongoose.connect('mongodb://localhost/zagat', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('Database connected'))
.catch(err => console.log(err));

const db = mongoose.connection;

const restaurantSchema = new mongoose.Schema({
  id: { type: Number, unique: true },
  imageUrls: [],
});

const Restaurants = mongoose.model('Restaurant', restaurantSchema);

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

module.exports = { db, get, Restaurants };
// module.exports.get = get;
