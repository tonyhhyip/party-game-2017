require('dotenv').load();
const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

require('./backend/template')(app);

require('./backend/assets')(app)
  .then(require('./backend/view'))
  .then(() => app.listen(process.env.PORT))
  .catch(console.error);
