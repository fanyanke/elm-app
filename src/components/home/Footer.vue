<template>
  <footer>
    <router-link
      class="nav"
      v-for="nav in navs"
      :key="nav.id"
      :to="nav.route"
      active-class="active"
    >
      <svg class="icon" aria-hidden="true">
        <use :xlink:href="nav.icon"></use>
      </svg>
      <span>{{ nav.title }}</span>
    </router-link>
  </footer>
</template>

<script setup lang="ts">
import { nanoid } from 'nanoid'
import { useGlobalStore } from '@/stores/global'

const globalStore = useGlobalStore()

const navs = [
  {
    id: nanoid(),
    icon: '#icon-elemo',
    title: '外卖',
    route: `/home?geohash=${globalStore.geohash}`
  },
  { id: nanoid(), icon: '#icon-zhinanzhen', title: '搜索', route: '/search' },
  { id: nanoid(), icon: '#icon-dingdan01', title: '订单', route: '/order' },
  { id: nanoid(), icon: '#icon-wode', title: '我的', route: '/user' }
]
</script>

<style scoped lang="scss">
footer {
  height: 1rem;
  background-color: #fff;
  position: fixed;
  bottom: 0;
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  padding: 0.16rem 0 0.08rem 0;
  .nav {
    width: 25%;
    height: 100%;
    display: flex;
    justify-content: space-around;
    flex-flow: column;
    align-items: center;
    color: black;

    .icon {
      height: 0.4rem;
      width: 0.4rem;
    }
  }

  .active {
    color: #3190e8;
    .icon {
      fill: #3190e8;
    }
  }
}
</style>
