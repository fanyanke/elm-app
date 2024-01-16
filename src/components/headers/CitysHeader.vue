<template>
  <div class="citys-header">
    <div class="title">
      <router-link to="/" class="white"> elm </router-link>
    </div>
    <div class="login">
      <router-link to="/login" class="white"> 登录/注册 </router-link>
    </div>
  </div>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<style scoped lang="scss">
.citys-header {
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

}
</style>
