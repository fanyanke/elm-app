<template>
  <div class="home-page">
    <home-header :address="detailAddress.name"></home-header>
    <h1>我是home页面</h1>
    <p>{{ addressStore.detailAddress }}</p>
  </div>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useRoute } from 'vue-router'
import { useAddressStore } from '@/stores/address'
import HomeHeader from '@/components/headers/HomeHeader.vue'

const route = useRoute()
const addressStore = useAddressStore()
addressStore.getDetailAddress(route.query.geohash)
const { detailAddress } = storeToRefs(addressStore)
</script>

<style scoped lang="scss">
h1 {
  margin-top: 1rem;
}
</style>
