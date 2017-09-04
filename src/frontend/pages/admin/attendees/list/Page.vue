<template>
  <v-layout column>
    <v-layout row>
      <v-flex xs12>
        <scanner @capture="handleCapture"></scanner>
      </v-flex>
    </v-layout>
    <search :handleSubmit="handleSubmit"></search>
    <v-layout row>
      <v-flex xs12>
        <list v-if="attendees !== null" :attendees="filterAttendees"></list>
        <v-progress-linear indeterminate height="5" v-else></v-progress-linear>
      </v-flex>
    </v-layout>
    <add></add>
  </v-layout>
</template>

<script src="./scripts.js"></script>
