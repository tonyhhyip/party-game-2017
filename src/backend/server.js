require('dotenv').load();
const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

require('./template')(app);

require('./static')(app)
  .then(require('./graphql'))
  .then(require('./assets'))
  .then(require('./view'))
  .catch(console.error);

app.listen(process.env.PORT || 8080);
