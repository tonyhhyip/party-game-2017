<template>
  <v-layout column>
    <v-breadcrumbs divider="/">
      <v-breadcrumbs-item>Admin</v-breadcrumbs-item>
    </v-breadcrumbs>
    <v-list>
      <v-list-tile avatar to="/admin/attendees">
        <v-list-tile-avatar>
          <v-icon class="grey lighten-2">people</v-icon>
        </v-list-tile-avatar>
        <v-list-title-content>
          Attendee
        </v-list-title-content>
      </v-list-tile>
      <v-list-tile avatar to="/admin/booth">
        <v-list-tile-avatar>
          <v-icon class="grey lighten-2">business</v-icon>
        </v-list-tile-avatar>
        <v-list-title-content>
          Booth
        </v-list-title-content>
      </v-list-tile>
    </v-list>
  </v-layout>
</template>