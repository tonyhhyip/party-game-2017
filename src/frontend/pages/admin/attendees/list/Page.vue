<template>
  <v-layout column>
    <v-breadcrumbs divider="/">
      <v-breadcrumbs-item to="/admin" activeClass="breadcrumbs-link">Admin</v-breadcrumbs-item>
      <v-breadcrumbs-item to="/admin/attendees">Attendees</v-breadcrumbs-item>
    </v-breadcrumbs>
    <v-layout row>
      <v-flex xs12>
        <scanner @capture="handleCapture"></scanner>
      </v-flex>
    </v-layout>
    <search></search>
    <v-layout row>
      <v-flex xs12>
        <list v-if="attendees !== null" :attendees="filterAttendees"></list>
        <v-progress-linear indeterminate height="5" v-else></v-progress-linear>
      </v-flex>
    </v-layout>
    <v-speed-dial v-model="fab" fixed bottom right transition="slide-y-reverse-transition" direction="top">
      <v-btn slot="activator" fab dark primary hover v-model="fab">
        <v-icon>settings</v-icon>
        <v-icon>close</v-icon>
      </v-btn>
      <v-btn secondary fab dark to="/admin/attendees/add">
        <v-icon>add</v-icon>
      </v-btn>
      <v-btn success fab dark @click="syncAttendee" :loading="syncing" :disabled="syncing">
        <v-icon>autorenew</v-icon>
      </v-btn>
    </v-speed-dial>
  </v-layout>
</template>

<script src="./scripts.js"></script>
