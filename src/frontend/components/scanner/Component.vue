<template>
  <v-layout column>
    <v-layout row>
      <v-flex xs12 class="qrcode-reader">
        <video :width="videoWidth" ref="video"></video>
        <canvas width="498px" height="375px" style="display: none" ref="canvas"></canvas>
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
