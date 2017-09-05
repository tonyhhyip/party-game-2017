<template>
  <v-layout column>
    <v-breadcrumbs divider="/">
      <v-breadcrumbs-item to="/admin" activeClass="breadcrumbs-link">Admin</v-breadcrumbs-item>
      <v-breadcrumbs-item to="/admin/booth" activeClass="breadcrumbs-link">Booth</v-breadcrumbs-item>
    </v-breadcrumbs>
    <v-layout row>
      <v-flex xs12>
        <list v-if="booths != null" :booths="booths"></list>
        <v-progress-linear indeterminate height="5" v-else></v-progress-linear>
      </v-flex>
    </v-layout>
    <v-btn fab to="/admin/booth/add" bottom right fixed primary dark>
      <v-icon>add</v-icon>
    </v-btn>
  </v-layout>
</template>

<script src="./script.js"></script>
