<template>
  <v-layout column>
    <v-breadcrumbs divider="/">
      <v-breadcrumbs-item to="/admin" activeClass="breadcrumbs-link">Admin</v-breadcrumbs-item>
      <v-breadcrumbs-item to="/admin/booth" activeClass="breadcrumbs-link">Booth</v-breadcrumbs-item>
      <v-breadcrumbs-item disabled>Info</v-breadcrumbs-item>
    </v-breadcrumbs>
    <v-progress-linear indeterminate height="5" v-if="booth === null"></v-progress-linear>
    <template v-else>
      <v-layout row>
        <v-flex xs12>
          <v-card>
            <v-card-title primary-title>
              <div>
                <h3 class="headline">{{ booth.name }}</h3>
                <div>Token: {{ booth.token }}</div>
              </div>
            </v-card-title>
          </v-card>
        </v-flex>
      </v-layout>
    </template>
  </v-layout>
</template>

<script src="./script.js"></script>
