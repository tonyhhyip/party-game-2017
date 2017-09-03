<template>
  <v-layout column>

    <v-layout row>
      <v-flex xs12>
        <v-btn primary to="/admin/attendees">Back</v-btn>
      </v-flex>
    </v-layout>

    <v-layout row v-if="attendee != null">
      <v-flex xs12>
        <v-card>
          <v-card-title primary-title>
            <div>
              <h3 class="headline">{{ attendee.name }}</h3>
              <div>Check In: {{ attendee.checkIn | time }}</div>
            </div>
          </v-card-title>

          <v-card-actions>
            <v-btn flat @click="checkIn" :disabled="attendee.checkIn !== null">Check In</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
    <v-progress-circular indeterminate :size="70" class="primary--text" v-else></v-progress-circular>

    <v-snackbar :timeout="5000" top v-model="snackbar">
      {{ notice }}
      <v-btn flat class="pink--text" @click="snackbar = false">Close</v-btn>
    </v-snackbar>
  </v-layout>
</template>

<script src="./script.js"></script>
