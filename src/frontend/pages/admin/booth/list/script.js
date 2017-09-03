import query from './query.graphql';
import List from './List.vue';

export default {
  components: {
    List,
  },
  apollo: {
    booths: {
      query,
    },
  },
  data() {
    return {
      booths: null,
    };
  },
};
