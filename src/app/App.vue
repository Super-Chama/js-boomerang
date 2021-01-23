<template>
  <div class="app">
    <upload-site @file="fileHandler"></upload-site>
    <video-preview :autoplay="false" :loop="false" title="Video Input" :source="inputSource"></video-preview>
    <video-preview :autoplay="true" :loop="true" title="Video Output" :source="outputSource"></video-preview>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import UploadSite from '../views/UploadSite.vue';
import Preview from '../views/Preview.vue';
import { Worker } from '../utils/worker';

export default Vue.extend({
  name: 'App',

  data: function () {
    return {
      worker: null,
      loading: true,
      inputSource: null,
      outputSource: null
    };
  },

  components: {
    'upload-site': UploadSite,
    'video-preview': Preview
  },

  methods: {
    fileHandler(file) {
      let self = this;
      if (file) {
        this.inputSource = URL.createObjectURL(file);
        this.worker
          .convertVideo(file)
          .then((resolve) => {
            self.outputSource = resolve;
          })
          .catch((error) => {
            console.log(error);
          });
      } else {
        this.inputSource = null;
      }
    }
  },

  beforeMount: function () {
    let self = this;
    this.worker = new Worker();
    this.worker
      .initiliaze()
      .then((res) => {
        self.loading = res;
      })
      .catch((error) => {
        window.alert('Something went wrong!');
      });
  }
});
</script>

<!--<style lang="scss" scoped>
.app {
  color: get-color(basic, brighter);
}
</style> -->
