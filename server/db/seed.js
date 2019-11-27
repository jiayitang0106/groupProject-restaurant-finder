const db = require('./index.js');


const data = [];

for (let i = 1; i <= 100; i++) {
  let restaurant = {
    id: i,
    photos: [],
  }

  let numberPhotos = Math.floor(Math.random() * 10 + 2);

  for (let j = numberPhotos; j > 0; j--) {
    const num = Math.floor((Math.random() * 823));
    let url = `https://hrr42-fec5.s3-us-west-1.amazonaws.com/photo${num}.jpg`;
    restaurant.photos.push(url);
  }

  data.push(restaurant);
}

return data;



// const insertSampleBlogs = function() {
//   Blog.create(samplePosts)
//     .then(() => db.disconnect());
// };

// insertSampleBlogs();