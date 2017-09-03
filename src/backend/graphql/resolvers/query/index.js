const attendees = require('./attendees');
const booths = require('./booths');

module.exports = {
  attendees,
  booths,
  ping() {
    return 'pong';
  },
};
