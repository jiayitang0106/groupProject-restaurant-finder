const mongoose = require('mongoose');

const db = mongoose.connect('mongodb:localhost/zagat', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

db.once('open', () => { console.log('Database connected')})

const restaurantSchema = new Schema({
  id: { type: Number, unique: true },
  imageUrls: [],
});

const Restaurants = mongoose.model('Restaurant', restaurantSchema);

const get = (id) => {
  return new Promise((resolve, reject) => {
    Restaurants.find({ 'id': id }).exec((err, docs) => resolve(docs));
  });
}

module.exports = { db, get };