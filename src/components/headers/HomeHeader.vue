<template>
  <div class="home-header">
    <div class="search">
      <svg class="icon" aria-hidden="true" @click="$router.push('/search')">
        <use xlink:href="#icon-sousuo"></use>
      </svg>
    </div>
    <div class="title">
      <router-link to="/citys">
        {{ address }}
      </router-link>
    </div>
    <div class="login">
      <router-link to="/login" class="white"> 登录/注册</router-link>
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
  z-index: 999;

  .search {
    width: 1rem;
    .icon {
      height: 0.5rem;
      width: 0.5rem;
      margin-top: 0.1rem;
      fill: #fff;
    }
  }

  .title {
    width: 50%;
    overflow: hidden;
    white-space: nowrap; /* 防止文字换行 */
    text-overflow: ellipsis; /* 超出部分显示省略号 */
    text-align: center;
    a {
      color: #fff;
    }
  }
}
</style>
