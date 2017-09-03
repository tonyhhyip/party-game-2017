module.exports = {
  records(obj, args, context) {
    const sql = `
    SELECT booth.id, booth.name, booth.token, records,create_time FROM booth
    LEFT JOIN records ON booth.id = records.booth
    WHERE records.attendee IS NULL OR records.attendee = $1  
  `;
    return context.db.any(sql, [obj.id])
      .then(rows => rows.map(row => ({
        createTime: row.create_time,
        booth: {
          id: row.id,
          name: row.name,
          token: row.token,
        },
        attendee: obj,
      })));
  },
};
