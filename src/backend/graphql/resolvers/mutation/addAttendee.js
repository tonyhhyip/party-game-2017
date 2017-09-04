module.exports = (obj, { attendee: { name, id, order } }, context) => {
  const sql = 'INSERT INTO attendees (id, name, order_id) VALUES ($1, $2, $3) RETURNING id';
  return context.db.task(t => t.one(sql, [id, name, order]))
    .then(row => ({
      name,
      id: row.id,
      finishGame: false,
      checkIn: null,
      orderID: order,
    }));
};
