module.exports = (root, { attendee }, context) => {
  const { id } = attendee;
  const updateQuery = 'UPDATE attendees SET check_in = NOW() WHERE id = $1 RETURNING id, name, check_in, finish_game, order_id';
  return context.db.task(h => h.tx(t => t.one(updateQuery, [id])))
    .then(row => ({
      id: row.id,
      finishGame: row.finish_game,
      checkIn: row.check_in,
      name: row.name,
      orderID: row.order_id,
    }));
};
