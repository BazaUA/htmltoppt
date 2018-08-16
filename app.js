const express = require('express');

const app = express();


app.use(express.static(`${__dirname}/public`));

app.get('/', (req, res) => {
  res.send('Hello');
});

const port = 3000;

app.listen(port, () => {
  console.log('listen on port: ', port);
});
