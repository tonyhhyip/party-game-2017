import mutation from './mutation.graphql';

export default {
  data() {
    return {
      name: '',
      token: '',
      loading: false,
    };
  },
  methods: {
    addBooth() {
      this.loading = true;
      this.$apollo.mutate({
        mutation,
        variables: {
          booth: {
            name: this.name,
            token: this.token,
          },
        },
      })
        .then(() => this.$router.push('/admin/booth'));
    },
  },
};
