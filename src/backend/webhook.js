const url = require('url');
const { Router } = require('express');
const pg = require('./graphql/context/pg');

const router = Router();

router.post(`/webhook/eventbrite/${process.env.EVENTBRITE_EVENT_ID}`, (req, resp) => {
  const path = url.parse(req.body.api_url).pathname;
  const pieces = path.replace(/^\/|\/$/, '').split('/');
  const id = pieces.reduce((val, piece) => {
    return val === null ? piece : val;
  }, null);
  const db = pg();
  const sql = 'UPDATE attendees SET check_in = NOW WHERE id = $1';
  db.task(h => h.tx(t => t.none(sql, [id])))
    .then(() => { resp.status(200).end(); });
});

module.exports = (app) => {
  return new Promise((resolve) => {
    app.use(router);
    resolve(app);
  });
};
