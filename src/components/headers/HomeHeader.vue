<template>
  <div class="home-header">
    <div class="search">
      <svg class="icon" aria-hidden="true" @click="$router.back()">
        <use xlink:href="#icon-zuojiantou"></use>
      </svg>
    </div>
    <div class="title">{{ address }}</div>
    <div class="login">
      <router-link to="/login" class="white"> 登录/注册 </router-link>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps(['address'])
</script>

<style scoped lang="scss">
.home-header {
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

  .search {
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
