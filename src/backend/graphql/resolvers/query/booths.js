module.exports = (root, args, context) => {
  const sql = 'SELECT id, name, token FROM booth';
  return context.db.any(sql);
};
