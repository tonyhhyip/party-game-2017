import query from '../query.graphql';
import mutation from './add.mutation.graphql';

export default {
  data() {
    return {
      dialog: false,
      id: '',
      name: '',
      order: '',
      loading: false,
    };
  },
  methods: {
    handleAdd() {
      this.$apollo.mutate({
        mutation,
        variables: {
          attendee: {
            id: this.id,
            name: this.name,
            order: this.order,
          },
          update(store, { data: { addAttendee } }) {
            const data = store.readQuery({ query });
            data.attendees.push(addAttendee);
            store.writeQuery({ query, data });
          },
        },
      })
        .then(() => {
          this.dialog = false;
          this.loading = false;
        });
    },
  },
  watch: {
    dialog(val) {
      if (!val) {
        this.id = '';
        this.name = '';
      }
    },
  },
};
