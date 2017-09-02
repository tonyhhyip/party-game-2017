require('dotenv').load();
const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

require('./template')(app);

require('./graphql')(app)
  .then(require('./assets'))
  .then(require('./view'))
  .then(() => app.listen(process.env.PORT || 8080))
  .catch(console.error);
