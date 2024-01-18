<template>
  <div class="home-page padding-footer">
    <home-header :address="detailAddress.name"></home-header>
    <carousel></carousel>
    <div class="merchant-list-content">
      <div class="tip">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-shangjia"></use>
        </svg>
        <span>附近商家</span>
      </div>
      <merchant-list :geohash="route.query.geohash"></merchant-list>
    </div>
    <footer-nav></footer-nav>
  </div>
</template>
<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useRoute } from 'vue-router'
import { useAddressStore } from '@/stores/address'
import HomeHeader from '@/components/headers/HomeHeader.vue'
import Carousel from '@/components/home/Carousel.vue'
import MerchantList from '@/components/home/MerchantList.vue'
import FooterNav from '@/components/home/Footer.vue'

const route = useRoute()
const addressStore = useAddressStore()
addressStore.getDetailAddress(route.query.geohash)
const { detailAddress } = storeToRefs(addressStore)
</script>

<style scoped lang="scss">
.home-page {
  background-color: #f5f5f5;
  .merchant-list-content {
    margin-top: 0.3rem;
    background-color: #fff;
    border-top: 0.02rem solid #ccc;
    padding: 0.24rem;

    .tip {
      display: flex;
      align-items: center;
      .icon {
        height: 0.4rem;
        width: 0.4rem;
      }
      span {
        margin-left: 0.2rem;
      }
    }
  }
}
</style>
