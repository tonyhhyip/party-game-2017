module.exports = (obj, { attendee: { name, id }}, context) => {
  const sql = 'INSERT INTO attendees (id, name) VALUES ($1, $2) RETURNING id';
  return context.db.task(t => t.one(sql, [id, name]))
    .then(row => ({
      name,
      id: row.id,
      finishGame: false,
      checkIn: null,
    }));
};
