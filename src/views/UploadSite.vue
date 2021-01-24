<template>
  <b-container fluid>
    <b-row class="d-flex p-2 justify-content-center">
      <b-col class="d-flex flex-column px-2 py-1 frame justify-content-center align-items-center">
        <h1>Boomerang.js<img width="60px" src="https://openmoji.org/data/color/svg/1FA83.svg" alt="boomerang"/></h1>

        <div class="filearea" v-if="file">
          <b-icon icon="file-earmark" animation="throb" font-scale="3"></b-icon>
          <span class="filearea_name">{{file.name}}</span>

          <span v-if="!error" class="filearea_actions">
            <b-button :disabled="busy" @click="process" variant="success" class="mb-2">
              <template v-if="busy">
                <b-spinner small type="grow"></b-spinner> Working...
              </template>
              <template v-else>
                <b-icon icon="arrow-repeat"></b-icon> Boomerang It!
              </template>
            </b-button>

            <b-button @click="remove" variant="danger" class="mb-2">
              <b-icon icon="x-circle"></b-icon> Remove
            </b-button>
          </span>
          <span v-else class="filearea_actions">
            <p>Looks like your browser is not yet supported! :(</p>
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
  name: 'UploadSite',
  props: {
    busy: Boolean,
    error: Boolean
  },
  data: function () {
    return {
      file: '',
      onHover: false
    };
  },
  methods: {
    onChange() {
      this.file = this.$refs.file.files[0];
      // Maximum allowed size in bytes
      const maxAllowedSize = 10 * 1024 * 1024;
      if (this.file.size > maxAllowedSize) {
        this.file = '';
        window.alert("Maximum file size exceeded!");
        return;
      }
      this.$emit('file', this.file);
    },
    remove() {
      this.file = '';
      this.$emit('file', null);
    },
    process() {
      this.$emit('process', true);
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
