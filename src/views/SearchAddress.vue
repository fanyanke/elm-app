<template>
  <div class="search-address-page">
    <search-address-header></search-address-header>
    <SearchAddress></SearchAddress>
  </div>
</template>

<script setup lang="ts">
import SearchAddressHeader from '@/components/headers/SearchAddressHeader.vue'
import SearchAddress from '@/components/search/SearchAddress.vue'
</script>

<style scoped lang="scss">
.search-address-page {
  height: 100%;
  padding-top: 1.2rem;
  background-color: #f5f5f5;
}
</style>
