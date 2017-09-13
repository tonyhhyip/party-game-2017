<template>
  <v-layout column>
    <template v-if="booth !== null">
      <v-layout row>
        <v-flex xs12 style="text-align: center">
          <h2 class="headline">{{ booth.name }}</h2>
        </v-flex>
      </v-layout>
      <scanner @capture="handleCapture" keepCapture></scanner>
      <v-snackbar v-model="snackbar" top :timeout="5000" :success="success" :error="!success">
        {{ notice }}
        <v-btn @click="snackbar = false" flat class="white--text">Close</v-btn>
      </v-snackbar>
    </template>
    <v-progress-linear indeterminate height="5" v-else></v-progress-linear>
  </v-layout>
</template>

<style>
  .snack__content {
    font-size: 2rem;
    height: 10vh;
  }
</style>

<script src="./script.js"></script>