module.exports = (obj, { attendee: { id } }, context) => {
  const sql = `
  UPDATE attendees SET finish_game = true WHERE id = $1
  RETURNING id, name, finish_game, check_in, order_id
  `;
  return context.db.task(t => t.one(sql, [id]))
    .then(row => ({
      id: row.id,
      name: row.name,
      finishGame: row.finish_game,
      checkIn: row.check_in,
      orderID: row.order_id,
    }));
};
