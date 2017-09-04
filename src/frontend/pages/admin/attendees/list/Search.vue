<template>
  <form @submit.prevent="handleSubmit">
    <v-layout row>
      <v-flex xs5>
        <v-text-field v-model="id" label="Order ID"></v-text-field>
      </v-flex>
      <v-flex xs5 offset-xs1>
        <v-text-field label="Name" v-model="query"></v-text-field>
      </v-flex>
    </v-layout>
  </form>
</template>

<script>
  import { mapActions, mapState } from 'vuex';

  export default {
    props: {
      handleSubmit: {
        type: Function,
        required: true,
      },
    },
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
