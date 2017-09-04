function createQuery({ token, id }) {
  if (id) {
    return ['SELECT id, name, token FROM booth WHERE id = $1', [id]];
  } else if (token) {
    return ['SELECT id, name, token FROM booth WHERE token = $1', [token]];
  }

  return ['SELECT id, name, token FROM booth'];
}

module.exports = (root, args, context) => {
  const sql = createQuery(args);
  return context.db.task(t => t.any(...sql));
};
