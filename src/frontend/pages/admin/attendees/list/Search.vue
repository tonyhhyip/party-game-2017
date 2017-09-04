<template>
  <v-layout row>
    <v-flex xs5>
      <form @submit.prevent="submitForm">
        <v-text-field v-model="id" label="Order ID"></v-text-field>
      </form>
    </v-flex>
    <v-flex xs5 offset-xs1>
      <v-text-field label="Name" v-model="query"></v-text-field>
    </v-flex>
  </v-layout>
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
    data() {
      return {
        id: '',
      };
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
      submitForm() {
        console.log('Submit');
        this.handleSubmit(this.id);
      },
      ...mapActions({
        updateAttendeeQuery: 'search/updateAttendeeQuery',
      }),
    },
  };
</script>
