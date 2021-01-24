<template>
  <div class="app">
    <upload-site :busy="loading" :error="error" @process="processVideo" @file="fileHandler"></upload-site>
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
      error: false,
      fileSource: null,
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
      if (file) {
        this.fileSource = file;
        this.inputSource = URL.createObjectURL(file);
      } else {
        this.fileSource = null;
        this.inputSource = null;
      }
    },
    processVideo() {
      let self = this;
      if (!this.fileSource) { return; }
      this.loading = true;
      this.worker
        .convertVideo(this.fileSource)
        .then((resolve) => {
          self.outputSource = resolve;
        })
        .catch((error) => {
          window.alert('Processing file failed! Try again.');
          console.error(error);
        })
        .finally(() => {
          this.loading = false;
        });
    }
  },

  beforeMount: function () {
    let self = this;
    this.worker = new Worker();
    this.worker
      .initiliaze()
      .then(() => {
        self.loading = false;
      })
      .catch((error) => {
        self.error = true;
        console.error(error);
      });
  }
});
</script>