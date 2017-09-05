<template>
  <v-layout column>
    <v-breadcrumbs divider="/">
      <v-breadcrumbs-item to="/admin" activeClass="breadcrumbs-link">Admin</v-breadcrumbs-item>
      <v-breadcrumbs-item to="/admin/attendees" activeClass="breadcrumbs-link">Attendees</v-breadcrumbs-item>
      <v-breadcrumbs-item to="/admin/attendees/add">Add</v-breadcrumbs-item>
    </v-breadcrumbs>
    <form>
      <v-card>
        <v-card-text>
          <v-layout row>
            <v-flex xs12>
              <v-text-field v-model="id" label="ID" required></v-text-field>
            </v-flex>
          </v-layout>
          <v-layout row>
            <v-flex xs12>
              <v-text-field v-model="name" label="Name" required></v-text-field>
            </v-flex>
          </v-layout>
          <v-layout row>
            <v-flex xs12>
              <v-text-field v-model="order" label="Order ID" required></v-text-field>
            </v-flex>
          </v-layout>
        </v-card-text>
        <v-card-actions>
          <v-btn primary flat type="submit" :loading="loading" :disable="loading">Add</v-btn>
        </v-card-actions>
      </v-card>
    </form>
  </v-layout>
</template>

<script src="./script.js"></script>
