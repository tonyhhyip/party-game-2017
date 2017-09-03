<template>
  <v-layout column>

    <v-layout row>
      <v-flex xs12>
        <v-btn primary to="/admin/attendees">Back</v-btn>
      </v-flex>
    </v-layout>

    <template v-if="attendee != null">
      <v-layout row>
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
      <v-layout row>
        <v-flex xs12>
          <v-list two-line subheader>
            <v-subheader inset>Booth Game</v-subheader>
            <v-list-tile avatar v-for="record in attendee.records" :key="record.booth.name">
              <v-list-tile-avatar>
                <v-icon :class="record.createTime === null ? 'red--text' : 'green--text'" class="grey lighten-2">
                  {{ record.createTime === null ? 'close' : 'done' }}
                </v-icon>
              </v-list-tile-avatar>
              <v-list-tile-content>
                <v-list-tile-title>{{ record.booth.name }}</v-list-tile-title>
                <v-list-tile-sub-title>{{ record.createTime | time }}</v-list-tile-sub-title>
              </v-list-tile-content>
            </v-list-tile>
          </v-list>
        </v-flex>
      </v-layout>
    </template>
    <v-progress-circular indeterminate :size="70" class="primary--text" v-else></v-progress-circular>

    <v-snackbar :timeout="5000" top v-model="snackbar">
      {{ notice }}
      <v-btn flat class="pink--text" @click="snackbar = false">Close</v-btn>
    </v-snackbar>
  </v-layout>
</template>

<script src="./script.js"></script>
