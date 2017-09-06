const url = require('url');
const { Router } = require('express');
const pg = require('./graphql/context/pg');

const router = Router();

router.post(`/webhook/eventbrite/${process.env.EVENTBRITE_EVENT_ID}`, (req, resp) => {
  const path = url.parse(req.body.api_url).pathname;
  const pieces = path.replace(/^\/|\/$/, '').split('/');
  let id = null;
  while (!id || id === null) {
    id = pieces.pop();
  }
  const db = pg();
  const sql = 'UPDATE attendees SET check_in = NOW() WHERE id = $1';
  db.task(h => h.tx(t => t.result(sql, [id])))
    .then(({ rowCount }) => { resp.status(rowCount === 1 ? 200 : 500).end(); });
});

module.exports = app => new Promise((resolve) => {
  app.use(router);
  resolve(app);
});
