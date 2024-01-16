<template>
  <div class="citys-page">
    <citys-header></citys-header>

    <div class="location-city">
      <div class="tip">
        <div class="left">当前定位城市：</div>
        <div class="right">定位不准时，请在城市列表中选择</div>
      </div>
      <div class="city">
        <router-link
          :to="{
            name: 'searchAddressPage',
            query: { id: currentCity.id, name: currentCity.name }
          }"
          class="blue"
        >
          <span>
            {{ currentCity.name }}
          </span>
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-youjiantou"></use>
          </svg>
        </router-link>
      </div>
    </div>

    <city-category :citys="hotCity"></city-category>
    <city-category :citys="allCity"></city-category>
  </div>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useAddressStore } from '@/stores/address'
import CitysHeader from '@/components/headers/CitysHeader.vue'
import CityCategory from '@/components/cityCategory/CityCategory.vue'

const addressStore = useAddressStore()

addressStore.getCurrentCity('guess')
addressStore.getHotCity('hot')
addressStore.getAllCity('group')

const { currentCity, hotCity, allCity } = storeToRefs(addressStore)
</script>

<style scoped lang="scss">
.citys-page {
  //height: 100%;
  background-color: #f5f5f5;
  .location-city {
    margin-top: 1rem;
    background-color: #fff;
    .tip {
      height: 1rem;
      width: 100%;
      padding: 0 0.3rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding-top: 0.2rem;
      border-bottom: 1px solid #ccc;

      .right {
        font-size: 0.24rem;
      }
    }
    .city {
      font-size: 0.32rem;
      padding: 0 0.3rem;
      color: #3190e8;
      border-bottom: 2px solid #ccc;
      .blue {
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 0.8rem;
      }
    }
  }
}
</style>
