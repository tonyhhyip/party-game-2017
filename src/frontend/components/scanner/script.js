import QRCode from 'qrcode-reader';

/* globals window, navigator */

export default {
  data() {
    return {
      capture: false,
      timeout: null,
      stream: null,
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
      if (this.stream !== null) {
        this.stream.getVideoTracks().forEach(track => track.stop());
      }

      if (this.timeout !== null) {
        clearTimeout(this.timeout);
      }
    },
    startCapture() {
      const video = this.$refs.video;
      const canvas = this.$refs.canvas;
      const context = canvas.getContext('2d');
      const qrcode = new QRCode();

      const successCallback = (stream) => {
        video.src = window.URL.createObjectURL(stream) || stream;
        const scan = () => {
          if (stream) {
            context.drawImage(video, 0, 0, 307, 250);
            const data = context.getImageData(0, 0, 498, 375);
            try {
              qrcode.decode(data);
            } catch (e) {
              console.error(e);
            }
            this.timeout = setTimeout(scan, 100);
          } else {
            this.timeout = setTimeout(scan, 100);
          }
        };
        this.stream = stream;
        this.timeout = setTimeout(scan, 500);
        video.play();
      };

      navigator.mediaDevices.getUserMedia({ video: true })
        .then(successCallback)
        .catch(console.trace);

      qrcode.callback = (e, result) => {
        if (!e && result) {
          console.log(result);
          this.handleCapture(result);
        }
      };
    },
  },
};
