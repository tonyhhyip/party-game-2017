module.exports = (root, { token }, context) => {
  const sql = `SELECT id, name, token FROM booth${token ? ' WHERE token = $1' : ''}`;
  return context.db.any(sql, token ? [token] : []);
};
