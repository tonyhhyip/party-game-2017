<template>
  <v-list two-line subheader>
    <v-subheader>Attendee</v-subheader>
    <v-list-tile v-for="attendee in attendees" :key="attendee.id">
      <v-list-tile-action>
        <v-icon class="green--text" v-if="attendee.finishGame">done</v-icon>
        <v-icon class="red--text" v-else>close</v-icon>
      </v-list-tile-action>
      <v-list-tile-content>
        <v-list-tile-title>{{ attendee.name }}</v-list-tile-title>
        <v-list-tile-sub-title>{{ attendee.checkIn | checkInStatus }}</v-list-tile-sub-title>
      </v-list-tile-content>
    </v-list-tile>
  </v-list>
</template>

<script>
  export default {
    props: {
      attendees: {
        type: Array,
        required: true,
      },
    },
    filters: {
      checkInStatus(val) {
        if (val === null) {
          return 'Not yet check in';
        }

        return val;
      },
    },
  };
</script>
