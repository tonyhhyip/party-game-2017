module.exports = (root, { id }, context) => {
  const query = `SELECT id, checkIn, finishGame, name FROM attendees${id ? ' WHERE id = $1' : ''}`;
  return context.db.any(query, id ? [id] : [])
    .then(rows => rows.map(row => ({
      id: row.id,
      finishGame: row.finishgame,
      checkIn: row.checkin,
      name: row.name,
    })));
};
