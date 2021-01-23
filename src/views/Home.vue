<template>
  <b-container fluid>
    <b-row class="d-flex p-2 justify-content-center">
      <b-col class="d-flex flex-column px-2 py-1 frame justify-content-center align-items-center">
        <h1>Boomerang.js</h1>

        <div class="filearea" v-if="file">
          <b-icon icon="file-earmark" animation="throb" font-scale="3"></b-icon>
          <span class="filearea_name">{{file.name}}</span>

          <span class="filearea_actions">
            <b-button variant="outline-success" class="mb-2">
              <b-icon icon="arrow-repeat"></b-icon> Boomerang
            </b-button>

            <b-button @click="remove" variant="outline-danger" class="mb-2">
              <b-icon icon="x-circle"></b-icon> Remove
            </b-button>
          </span>
        </div>

        <div v-else class="droparea" :class="{ 'active': onHover }" @dragover="dragover" @dragleave="dragleave" @drop="drop">
          <label class="droparea_hint" for="fileuploader">Drop your media here or touch here</label>
          <input type="file" name="fileuploader" class="droparea_input" @change="onChange" ref="file" accept=".mp4" />
        </div>

      </b-col>
    </b-row>
  </b-container>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'home',
  data: function () {
    return {
      file: '',
      onHover: false
    };
  },
  methods: {
    onChange() {
      this.file = this.$refs.file.files[0];
    },
    remove() {
      this.file = '';
    },
    dragover(event) {
      event.preventDefault();
      this.onHover = true;
    },
    dragleave() {
      this.onHover = false;
    },
    drop(event) {
      event.preventDefault();
      this.$refs.file.files = event.dataTransfer.files;
      this.onChange();
      this.onHover = false;
    }
  }
});
</script>