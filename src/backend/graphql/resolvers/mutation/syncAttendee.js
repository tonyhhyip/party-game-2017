const axios = require('axios');
const attendeesResolver = require('../query/attendees');

const token = process.env.EVENTBRITE_OAUTH_TOKEN;
const event = process.env.EVENTBRITE_EVENT_ID;

const uri = `https://www.eventbriteapi.com/v3/events/${event}/attendees`;
const insertSQL = `
  INSERT INTO attendees (id, name, order_id, ticket) VALUES ($1, $2, $3, $4)
  ON CONFLICT (id) DO NOTHING RETURNING 1
`;

function loadAttendee(db, continuation = null) {
  return axios.get(uri, {
    params: continuation ? { continuation, token } : { token },
    responseType: 'json',
  })
    .then(({ data }) => {
      const attendees = data.attendees
        .map(attendee => [
          attendee.id,
          attendee.profile.name.replace(attendee.profile.prefix, ''),
          attendee.order_id,
          attendee.ticket_class_name,
        ]);
      return db.tx(t => t.batch(attendees.map(attendee => t.result(insertSQL, attendee))))
        .then(results => results.forEach((result, index) => {
          if (result.rowCount === 0) {
            console.log('Not importing', JSON.stringify(attendees[index]));
          }
        }))
        .then(() => {
          if ('continuation' in data.pagination) {
            return loadAttendee(db, data.pagination.continuation);
          }
          return null;
        });
    });
}

module.exports = (obj, args, context) => loadAttendee(context.db)
  .then(() => attendeesResolver(obj, args, context));
