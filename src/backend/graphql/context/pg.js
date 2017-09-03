const pgp = require('pg-promise')();

const pool = pgp(process.env.DB_URL);

module.exports = () => pool;
