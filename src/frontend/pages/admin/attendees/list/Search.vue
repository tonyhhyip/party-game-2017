<template>
  <v-text-field label="Name" v-model="query"></v-text-field>
</template>

<script>
  import { mapActions, mapState } from 'vuex';

  export default {
    computed: {
      query: {
        get() {
          return this.attendeeQuery;
        },
        set(val) {
          this.updateAttendeeQuery(val);
        },
      },
      ...mapState({
        attendeeQuery: state => state.search.attendees,
      }),
    },
    methods: {
      ...mapActions({
        updateAttendeeQuery: 'search/updateAttendeeQuery',
      }),
    },
  };
</script>
