<template>
  <v-layout column>
    <v-layout row>
      <v-flex xs12>
        <search></search>
      </v-flex>
    </v-layout>
    <v-layout row>
      <v-flex xs12>
        <list v-if="attendees !== null" :attendees="filterAttendees"></list>
        <v-progress-linear indeterminate height="5" v-else></v-progress-linear>
      </v-flex>
    </v-layout>
  </v-layout>
</template>

<script src="./scripts.js"></script>
