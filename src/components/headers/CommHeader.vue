<template>
  <div class="comm-header">
    <svg class="icon" aria-hidden="true" @click="$router.back()">
      <use xlink:href="#icon-zuojiantou"></use>
    </svg>
    <span>{{ title }}</span>
  </div>
</template>

<script setup lang="ts">
defineProps(['title'])
</script>

<style scoped lang="scss">
.comm-header {
  position: fixed;
  top: 0;
  height: 1rem;
  width: 100%;
  background-color: #3190e8;
  color: #fff;
  display: flex;
  align-items: center;
  padding: 0 0.3rem;
  .icon {
    width: 0.4rem;
    height: 0.4rem;
  }
  span {
    width: 80%;
    text-align: center;
    font-size: 16px;
  }
}
</style>
