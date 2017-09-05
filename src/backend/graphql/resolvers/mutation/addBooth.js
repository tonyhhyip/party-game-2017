module.exports = (obj, { booth: { name, token } }, context) => {
  const sql = 'INSERT INTO booth (name, token) VALUES ($1, $2) RETURNING id, name, token';
  return context.db.tx(t => t.one(sql, [name, token]));
};
