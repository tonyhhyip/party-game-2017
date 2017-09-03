module.exports = (root, { attendee }, context) => {
  const { id } = attendee;
  const updateQuery = 'UPDATE attendees SET checkIn = NOW() WHERE id = $1';
  const selectQuery = 'SELECT id, name, checkIn, finishGame FROM attendees WHERE id = $1';
  return context.db.tx(t => t.batch([
    t.none(updateQuery, [id]),
  ]))
    .then(() => context.db.one(selectQuery, [id]))
    .then(row => ({
      id: row.id,
      finishGame: row.finishgame,
      checkIn: row.checkin,
      name: row.name,
    }));
};
