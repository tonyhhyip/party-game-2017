import { mapState } from 'vuex';
import query from './query.graphql';
import mutation from './addRecord.mutation.graphql';

/* globals sessionStorage, window */

export default {
  components: {
    Scanner: () => import('../../components/scanner/Component.vue'),
  },
  data() {
    return {
      token: null,
      booths: null,
      id: '',
      snackbar: false,
    };
  },
  computed: {
    booth() {
      return this.booths !== null ? this.booths[0] : null;
    },
    ...mapState({
      queryToken: state => state.route.query.token,
    }),
  },
  mounted() {
    this.storeQueryToken();
    const token = sessionStorage.getItem('token');
    if (token === null) {
      window.location.href = 'http://hk.sitcon.org';
    }
    this.token = token;
  },
  methods: {
    storeQueryToken() {
      if (this.queryToken) {
        sessionStorage.setItem('token', this.queryToken);
      }
    },
    handleSubmit() {
      this.handleCapture(this.id.substr(0, 9));
      this.id = '';
    },
    handleCapture(id) {
      this.$apollo.mutate({
        mutation,
        variables: {
          attendee: { id },
          booth: { id: this.booth.id },
        },
      })
        .then(() => { this.snackbar = true; });
    },
  },
  apollo: {
    booths: {
      query,
      variables() {
        return {
          token: this.token,
        };
      },
      skip() {
        return this.token === null;
      },
    },
  },
};
