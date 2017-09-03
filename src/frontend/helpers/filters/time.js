import moment from 'moment-timezone';

export default function checkInStatus(val) {
  if (val === null) {
    return 'None';
  }

  return moment(val).tz('Asia/Hong_Kong').format('HH:mm:ss');
}
