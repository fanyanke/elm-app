<template>
  <div class="home-page">
    <h1>我是home页面</h1>
    <p>{{ $route.query }}</p>
  </div>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router'

console.log(useRoute().query)
</script>

<style scoped lang="scss"></style>
