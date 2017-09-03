<template>
  <v-layout row>
    <v-flex xs12>
      <v-list two-line subheader>
        <v-subheader inset>Booth Game</v-subheader>
        <v-list-tile avatar v-for="record in records" :key="record.booth.name">
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

<script>
  import time from '../../../../helpers/filters/time';

  export default {
    props: {
      records: {
        type: Array,
        required: true,
      },
    },
    filters: { time },
  };
</script>
