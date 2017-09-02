module.exports = (root, args, context) => {
  const query = 'SELECT id, checkIn, finishGame, name FROM attendees';
  return context.db.any(query)
    .then(rows => rows.map(row => ({
      id: row.id,
      finishGame: row.finishgame,
      checkIn: row.checkin,
      name: row.name,
    })));
};
