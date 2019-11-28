const mongoose = require('mongoose');

const db = mongoose.connect(process.env.MONGODB_URL || 'mongodb://localhost:3001/zagat', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => console.log("Database connected"))
  .catch(err => console.log(err));


const restaurantSchema = new mongoose.Schema({
  id: { type: Number, unique: true },
  imageUrls: [],
});

const Restaurants = mongoose.model('Restaurant', restaurantSchema);

const get = (id) => {
  return new Promise((resolve, reject) => {
    Restaurants.find({ 'id': id }).exec((err, docs) => resolve(docs));
  });
}

module.exports = db;
