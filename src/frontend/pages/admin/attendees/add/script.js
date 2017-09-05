import mutation from './mutation.graphql';

export default {
  data() {
    return {
      id: '',
      name: '',
      order: '',
      loading: false,
    };
  },
  methods: {
    addAttendees() {
      this.loading = true;
      this.$apollo.mutate({
        mutation,
        variables: {
          attendee: {
            id: this.id,
            name: this.name,
            order: this.order,
          },
        },
      })
        .then(() => this.$router.push('/admin/attendees'));
    },
  },
};
