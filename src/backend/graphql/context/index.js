const pg = require('./pg');

module.exports = () => ({
  db: pg(),
});
