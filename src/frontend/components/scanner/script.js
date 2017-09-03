/* globals window, navigator */

export default {
  data() {
    return {
      capture: false,
      scanner: null,
      value: 'No Data',
    };
  },
  computed: {
    videoWidth() {
      return `${this.capture ? 500 : 0}px`;
    },
    buttonText() {
      return this.capture ? 'Stop' : 'Capture';
    },
  },
  beforeDestroy() {
    this.stopCapture();
  },
  methods: {
    handleCapture({ result }) {
      console.log(result);
      this.value = result;
      this.$emit('capture', result.substr(0, 9));
      this.stopCapture();
      this.capture = false;
    },
    toggleCapture() {
      if (this.capture) {
        this.stopCapture();
        this.capture = false;
      } else {
        this.startCapture();
        this.capture = true;
      }
    },
    stopCapture() {
      if (navigator.mediaDevices) {
        this.scanner.setStopped(true);
        this.scanner.dispose();
      }
    },
    startCapture() {
      window.w69b.qr.decoding.setWorkerUrl('/w69b.qrcode.decodeworker.min.js');
      if (navigator.mediaDevices && !window.navigator.userAgent.match(/iPhone|iPad|iPod/i)) {
        this.scanner = new window.w69b.qr.ui.ContinuousScanner();
        this.scanner.setDecodedCallback((result) => this.handleCapture({ result }));
        this.scanner.render(this.$refs.capture);
        console.log(this.scanner);
      } else {
        console.log('Sorry, native web camera streaming (getUserMedia) is not supported by this browser...');
      }
    },
  },
};
