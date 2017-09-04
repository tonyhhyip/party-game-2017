<template>
  <v-layout column>
    <v-breadcrumbs divider="/">
      <v-breadcrumbs-item to="/admin" activeClass="breadcrumbs-link">Admin</v-breadcrumbs-item>
      <v-breadcrumbs-item to="/admin/attendees" activeClass="breadcrumbs-link">Attendees</v-breadcrumbs-item>
      <v-breadcrumbs-item disabled>Info</v-breadcrumbs-item>
    </v-breadcrumbs>
    <template v-if="attendee != null">
      <v-layout row>
        <v-flex xs12>
          <v-card>
            <v-card-title primary-title>
              <div>
                <h3 class="headline">
                  {{ attendee.name }}
                  <small>{{ attendee.ticket }}</small>
                </h3>
                <div>Check In: {{ attendee.checkIn | time }}</div>
              </div>
            </v-card-title>

            <v-card-actions>
              <v-btn flat @click="checkIn" :disabled="attendee.checkIn !== null">Check In</v-btn>
              <v-btn flat @click="finishGame" :disabled="!allowFinishGame">Finish Game</v-btn>
            </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>
      <list :records="attendee.records"></list>
    </template>
    <v-progress-circular indeterminate :size="70" class="primary--text" v-else></v-progress-circular>

    <v-snackbar :timeout="5000" top v-model="snackbar">
      {{ notice }}
      <v-btn flat class="pink--text" @click="snackbar = false">Close</v-btn>
    </v-snackbar>
  </v-layout>
</template>

<script src="./script.js"></script>
