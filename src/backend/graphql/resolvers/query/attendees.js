function formatToOutput(rows) {
  return rows.map(row => ({
    id: row.id,
    finishGame: row.finish_game,
    checkIn: row.check_in,
    name: row.name,
    orderID: row.order_id,
    ticket: row.ticket,
  }));
}

function createQuery({ id, order }) {
  if (id) {
    return ['SELECT id, check_in, finish_game, name, order_id, ticket FROM attendees WHERE id = $1', [id]];
  } else if (order) {
    return ['SELECT id, check_in, finish_game, name, order_id, ticket FROM attendees WHERE order_id = $1', [order]];
  }

  return ['SELECT id, check_in, finish_game, name, order_id, ticket FROM attendees'];
}

module.exports = (root, args, context) => {
  const query = createQuery(args);
  // eslint-disable-next-line prefer-spread
  return context.db.task(t => t.any.apply(t, query))
    .then(formatToOutput);
};
