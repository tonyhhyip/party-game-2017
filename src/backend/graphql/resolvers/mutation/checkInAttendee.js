module.exports = (root, { attendee }, context) => {
  const { id } = attendee;
  const updateQuery = 'UPDATE attendees SET check_in = NOW() WHERE id = $1 RETURNING id, name, check_in, finish_game';
  return context.db.task(t => t.tx(t => t.one(updateQuery, [id])))
    .then(row => ({
      id: row.id,
      finishGame: row.finish_game,
      checkIn: row.check_in,
      name: row.name,
    }));
};
