const mjml = require('mjml');
const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded());

app.get('/hello', function (req, res) {
  res.send('Hello World, from our email api');
});


app.post('/transform', (req, res) => {
  const output = mjml(req.body.mjml);

  res.send(output.html);
});

app.listen(3000, () => console.log('email is up on port 3000'));