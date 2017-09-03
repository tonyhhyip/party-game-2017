module.exports = (obj, { attendee, booth }, context) => {
  const sql = `
  INSERT INTO records (attendee, booth) VALUES ($1, $2)
  ON CONFLICT (attendee, booth) DO UPDATE SET create_time = NOW()
  RETURNING create_time
  `;
  return context.db.one(sql, [attendee.id, booth.id])
    .then(data => ({
      createTime: data.create_time,
      attendee: { id: attendee.id },
      booth: { id: booth.id },
    }));
};
