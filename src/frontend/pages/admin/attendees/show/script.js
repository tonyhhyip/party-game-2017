import { mapState } from 'vuex';
import List from './List.vue';
import query from './query.graphql';
import checkInMutation from './checkIn.mutation.graphql';
import time from '../../../../helpers/filters/time';

export default {
  components: {
    List,
  },
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
    allowFinishGame() {
      return this.attendee &&
        (this.attendee.checkIn !== null) &&
        !this.attendee.finishGame &&
        this.attendee.records.every(record => record.createTime !== null);
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
        mutation: checkInMutation,
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
