<template>
  <v-layout column>
    <v-layout row>
      <v-flex xs12>
        <v-btn to="/admin/booth" primary>Back</v-btn>
      </v-flex>
    </v-layout>
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
