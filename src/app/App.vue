<template>
  <div class="app">
    <router-view class="section"></router-view>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default class extends Vue {
  public name = 'App';
}
</script>

<!--<style lang="scss" scoped>
.app {
  color: get-color(basic, brighter);
}
</style> -->
