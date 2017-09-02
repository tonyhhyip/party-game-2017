import query from './query.graphql';

export default {
  apollo: {
    attendees: query,
  },
  filters: {
    checkInStatus(val) {
      if (val === null) {
        return 'Not yet check in';
      }

      return val;
    },
  },
};
