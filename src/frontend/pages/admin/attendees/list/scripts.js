import { mapState } from 'vuex';
import query from './query.graphql';
import mutation from './sync.mutation.graphql';
import List from './List.vue';
import Search from './Search.vue';

export default {
  components: {
    List,
    Search,
    Scanner: () => import('../../../../components/scanner/Component.vue'),
  },
  data() {
    return {
      attendees: null,
      id: '',
      fab: false,
      syncing: false,
    };
  },
  computed: {
    filterAttendees() {
      let { attendees } = this;

      if (this.nameQuery.trim().length > 0) {
        const queryString = this.nameQuery.toLowerCase().trim();
        attendees = attendees
          .filter(attendee => attendee.name.toLowerCase().indexOf(queryString) !== -1);
      }

      if (this.orderQuery.trim().length > 0) {
        attendees = attendees
          .filter(attendee => attendee.orderID.indexOf(this.orderQuery.trim()) !== -1);
      }

      return attendees;
    },
    ...mapState({
      nameQuery: state => state.search.attendeesName,
      orderQuery: state => state.search.attendeesOrder,
    }),
  },
  apollo: {
    attendees: {
      query,
      fetchPolicy: 'cache-and-network',
    },
  },
  methods: {
    handleCapture(id) {
      this.$router.push({
        name: 'admin.attendees.show',
        params: {
          id,
        },
      });
    },
    syncAttendee() {
      this.syncing = true;
      this.$apollo.mutate({
        mutation,
        update(store, { data: { syncAttendee } }) {
          const data = store.readQuery({ query });
          data.attendees = syncAttendee;
          store.writeQuery({ query, data });
        },
      })
        .then(() => { this.syncing = false; });
    },
  },
};
