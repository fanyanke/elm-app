<script setup lang="ts">
import { RouterView } from 'vue-router'
import FooterNav from '@/components/home/Footer.vue'
import { useGlobalStore } from '@/stores/global'
const globalStore = useGlobalStore()
</script>

<template>
  <div class="app">
    <router-view v-slot="{ Component }">
      <keep-alive exclude="Food, Shop">
        <component :is="Component" />
      </keep-alive>
    </router-view>
    <footer-nav v-show="globalStore.footerFlag"></footer-nav>
  </div>
</template>

<style scoped lang="scss">
.app {
  height: 100vh;
}
</style>
