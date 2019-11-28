const express = require('express');
const parser = require('body-parser');
const morgan = require('morgan');


const app = express();


app.use(morgan('dev'));
app.use(parser.json());
app.use(parser.urlencoded({ extended: true}));

app.use(express.static('public'));


app.get('/api/restaurants/:restaurantId', (req, res) => {
  console.log(req.params);
  res.status(200).send('Images go here');
});

const port = process.env.PORT || 3001;


app.listen(port, console.log(`Server running on port: ${port}`));