<template>
  <v-layout row>
    <v-flex xs5>
      <v-text-field v-model="id" label="Order ID"></v-text-field>
    </v-flex>
    <v-flex xs5 offset-xs1>
      <v-text-field label="Name" v-model="query"></v-text-field>
    </v-flex>
  </v-layout>
</template>

<script>
  import { mapActions, mapState } from 'vuex';

  export default {
    computed: {
      query: {
        get() {
          return this.nameQuery;
        },
        set(val) {
          this.updateAttendeeNameQuery(val);
        },
      },
      id: {
        get() {
          return this.orderQuery;
        },
        set(val) {
          this.updateAttendeesOrder(val);
        },
      },
      ...mapState({
        nameQuery: state => state.search.attendeesName,
        orderQuery: state => state.search.attendeesOrder,
      }),
    },
    methods: {
      ...mapActions({
        updateAttendeeNameQuery: 'search/updateAttendeeNameQuery',
        updateAttendeesOrder: 'search/updateAttendeesOrder',
      }),
    },
  };
</script>
