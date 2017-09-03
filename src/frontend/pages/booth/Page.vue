<template>
  <v-layout column>
    <template v-if="booth !== null">
      <v-layout row>
        <v-flex xs12 style="text-align: center">
          <h2 class="headline">{{ booth.name }}</h2>
        </v-flex>
      </v-layout>
      <scanner @capture="handleCapture"></scanner>
      <form @submit.prevent="handleSubmit">
        <v-layout row>
          <v-flex xs12>
            <v-text-field v-model="id" label="Order ID"></v-text-field>
          </v-flex>
        </v-layout>
      </form>
      <v-snackbar v-model="snackbar" top :timeout="5000">
        {{ notice }}
        <v-btn @click="snackbar = false" flat class="pink--text">Close</v-btn>
      </v-snackbar>
    </template>
    <v-progress-linear indeterminate height="5" v-else></v-progress-linear>
  </v-layout>
</template>

<script src="./script.js"></script>