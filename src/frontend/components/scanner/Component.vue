<template>
  <v-layout column>
    <v-layout row>
      <v-flex xs12 class="qrcode-reader">
        <div ref="capture"></div>
      </v-flex>
    </v-layout>
    <v-layout>
      <v-flex xs12 style="text-align: center">
        <div class="headline">{{ value }}</div>
      </v-flex>
    </v-layout>
    <v-layout row>
      <v-flex xs12 style="text-align: center">
        <v-btn primary @click="toggleCapture">{{ buttonText }}</v-btn>
      </v-flex>
    </v-layout>
  </v-layout>
</template>

<style src="./style.styl" lang="stylus" scoped></style>
<script src="./script.js"></script>
