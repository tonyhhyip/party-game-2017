import { mapState } from 'vuex';
import List from './List.vue';
import query from './query.graphql';
import checkInMutation from './checkIn.mutation.graphql';
import finishGameMutation from './finishGame.mutation.graphql';
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
      fetchPolicy: 'cache-and-network',
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
    finishGame() {
      this.$apollo.mutate({
        mutation: finishGameMutation,
        variables: {
          attendee: {
            id: this.id,
          },
        },
        update: (store, { data: { finishGame } }) => {
          const variables = { id: this.id };
          const data = store.readQuery({ query, variables });
          data.attendees[0].checkIn = finishGame.finishGame;
          store.writeQuery({ query, variables, data });
        },
      })
        .then(() => {
          this.notice = 'End Game';
          this.snackbar = true;
        });
    },
    checkIn() {
      this.$apollo.mutate({
        mutation: checkInMutation,
        variables: {
          attendee: { id: this.id },
        },
        update: (store, { data: { checkInAttendee } }) => {
          const variables = { id: this.id };
          const data = store.readQuery({ query, variables });
          data.attendees[0].checkIn = checkInAttendee.checkIn;
          store.writeQuery({ query, variables, data });
        },
      })
        .then(() => {
          this.notice = 'Check In';
          this.snackbar = true;
        });
    },
  },
};
