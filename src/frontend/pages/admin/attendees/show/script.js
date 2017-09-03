import { mapState } from 'vuex';
import query from './query.graphql';
import mutation from './checkIn.mutation.graphql';
import time from '../../../../helpers/filters/time';

export default {
  data() {
    return {
      attendees: null,
      snackbar: false,
      notice: '',
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
  methods: {
    checkIn() {
      this.$apollo.mutate({
        mutation,
        variables: {
          attendee: { id: this.id },
        },
        update: (store, { data }) => {
          const variables = { id: this.id };
          const content = store.readQuery({ query, variables });
          content.attendees[0].checkIn = data.checkInAttendee.checkIn;
          store.writeQuery({ query, variables, data: content });
        },
      })
        .then(() => {
          this.notice = 'Check In';
          this.snackbar = true;
        });
    },
  },
};
