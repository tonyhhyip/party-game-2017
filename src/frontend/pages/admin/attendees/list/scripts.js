import { mapState } from 'vuex';
import query from './query.graphql';
import List from './List.vue';
import Search from './Search.vue';

export default {
  components: {
    List,
    Search,
  },
  data() {
    return {
      attendees: null,
    };
  },
  computed: {
    filterAttendees() {
      if (this.attendeeQuery.length === 0) {
        return this.attendees;
      }

      const queryString = this.attendeeQuery.toLowerCase();

      return this.attendees.filter(
        attendee => attendee.name.toLowerCase().indexOf(queryString) !== -1,
      );
    },
    ...mapState({
      attendeeQuery: state => state.search.attendees,
    }),
  },
  apollo: {
    attendees: {
      query,
    },
  },
};
