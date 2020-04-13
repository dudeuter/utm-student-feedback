const path = require('path');
const compression = require('compression');
const express = require('express');
const morgan = require('morgan');

const db = require('./database');

const app = express();
const PORT = 80;

app.use(morgan('dev'));
app.use(compression());
app.use(express.static(path.join(__dirname, '../public')));

const randPercent = () => Math.ceil(Math.random() * 100);

app.get('/entry', (req, res) => {
  db.getData((err, data) => {
    if (err) {
      res.statusCode = 500;
      res.end();
    } else {
      res.statusCode = 200;
      res.send(
        JSON.stringify({
          rating: (Math.ceil(Math.random() * 40) + 10) / 10,
          percentages: [randPercent(), randPercent(), randPercent(), randPercent(), randPercent()],
          reviews: data,
        }),
      );
      res.end();
    }
  });
});

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`listening on port ${PORT}...`);
});
