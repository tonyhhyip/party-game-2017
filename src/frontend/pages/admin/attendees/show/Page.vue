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
              <div>Check In: {{ attendee.checkIn | checkInStatus }}</div>
            </div>
          </v-card-title>
        </v-card>
      </v-flex>
    </v-layout>
    <v-progress-circular indeterminate :size="70" class="primary--text" v-else></v-progress-circular>
  </v-layout>
</template>

<script src="./script.js"></script>
