<template>
  <div class="search-address-header">
    <div class="back">
      <svg class="icon" aria-hidden="true" @click="$router.back()">
        <use xlink:href="#icon-zuojiantou"></use>
      </svg>
    </div>
    <div class="title">{{ query.name }}</div>
    <div class="change-city">
      <router-link to="/citys" class="white"> 切换城市 </router-link>
    </div>
  </div>
</template>

<script setup lang="ts">
import { toRef } from 'vue'
import { useRoute, RouterLink } from 'vue-router'

const query = toRef(useRoute(), 'query')
</script>

<style scoped lang="scss">
.search-address-header {
  width: 100%;
  height: 1rem;
  background-color: #3190e8;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.16rem 0.3rem;
  color: #fff;
  position: fixed;
  top: 0;

  .back {
    .icon {
      height: 0.4rem;
      width: 0.4rem;
      margin-top: 0.1rem;
    }
  }
  .title {
    margin-left: 0.4rem;
  }
}
</style>
