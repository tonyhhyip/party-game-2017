import { mapState } from 'vuex';
import query from './query.graphql';
import time from '../../../../helpers/filters/time';

export default {
  data() {
    return {
      attendees: null,
    };
  },
  apollo: {
    attendees: {
      query,
      variables() {
        return { id: this.id };
      },
    },
  },
  computed: {
    attendee() {
      return this.attendees !== null ? this.attendees[0] : null;
    },
    ...mapState({
      id: state => state.route.params.id,
    }),
  },
  filters: {
    time,
  },
};
