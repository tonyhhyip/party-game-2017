<template>
  <v-layout column>
    <v-layout row>
      <v-flex xs12>
        <list v-if="booths != null" :booths="booths"></list>
        <v-progress-linear indeterminate height="5" v-else></v-progress-linear>
      </v-flex>
    </v-layout>
  </v-layout>
</template>

<script src="./script.js"></script>
