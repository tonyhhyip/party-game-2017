import { mapState } from 'vuex';
import query from './query.graphql';

export default {
  data() {
    return {
      booths: null,
    };
  },
  computed: {
    booth() {
      return this.booths !== null ? this.booths[0] : null;
    },
    link() {
      return this.booth !== null ? `https://hk.sitcon.party/booth?token=${this.booth.token}` : null;
    },
    ...mapState({
      id: state => state.route.params.id,
    }),
  },
  apollo: {
    booths: {
      query,
      variables() {
        return {
          id: this.id,
        };
      },
    },
  },
};
