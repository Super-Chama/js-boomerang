<template>
  <b-container fluid>
    <b-row class="d-flex p-2 justify-content-center">
      <b-col class="d-flex flex-column px-2 py-1 frame justify-content-center align-items-center">
        <h6 class="frame_subtext">{{title}}</h6>
        <video :autoplay="autoplay" :loop="loop" v-if="source" :src="source" type="video/mp4" controls width="375"></video>
        <img v-else src="../assets/images/video-placeholder.jpg" width="375">
      </b-col>
    </b-row>
  </b-container>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'Preview',
  props: {
    title: String,
    source: String,
    autoplay: Boolean,
    loop: Boolean
  },
  // data: function () {
  //   return {
  //     video: ''
  //   };
  // },
  methods: {}
});
</script>
