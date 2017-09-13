import query from './query.graphql';
import List from './List.vue';

export default {
  components: {
    List,
  },
  apollo: {
    booths: {
      query,
      fetchPolicy: 'cache-and-network',
    },
  },
  data() {
    return {
      booths: null,
    };
  },
};
