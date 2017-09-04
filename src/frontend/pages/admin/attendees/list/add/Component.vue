<template>
  <v-dialog v-model="dialog">
    <v-btn secondary dark fab slot="activator">
      <v-icon>add</v-icon>
    </v-btn>
    <v-card>
      <v-card-title>
        <span class="headline">Add Attendee</span>
      </v-card-title>
      <v-card-text>
        <v-text-field label="Ticket ID" v-model="id" required></v-text-field>
        <v-text-field label="Order ID" v-model="order" required></v-text-field>
        <v-text-field label="Name" v-model="name" required></v-text-field>
      </v-card-text>
      <v-card-actions>
        <v-btn flat class="primary--text" :loading="loading" :disable="loading">Add</v-btn>
        <v-btn flat class="primary--text" @click="dialog = false" :disable="loading">Close</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script src="./script.js"></script>