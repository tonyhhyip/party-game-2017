<template>
  <v-list subheader>
    <v-subheader>Booth</v-subheader>
    <v-list-tile v-for="booth in booths" :key="booth.id">
      <v-list-tile-content>
        {{ booth.name }}
      </v-list-tile-content>
    </v-list-tile>
  </v-list>
</template>

<script>
  export default {
    props: {
      booths: {
        type: Array,
        required: false,
      },
    },
  };
</script>
