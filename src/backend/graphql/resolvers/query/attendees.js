module.exports = (root, { id }, context) => {
  const query = `SELECT id, check_in, finish_game, name FROM attendees${id ? ' WHERE id = $1' : ''}`;
  return context.db.task(t => t.any(query, id ? [id] : []))
    .then(rows => rows.map(row => ({
      id: row.id,
      finishGame: row.finish_game,
      checkIn: row.check_in,
      name: row.name,
    })));
};
