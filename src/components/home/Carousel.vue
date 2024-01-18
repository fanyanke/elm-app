<template>
  <div class="carousel margin-header">
    <swiper :slides-per-view="1" :loop="true" class="swiper">
      <swiper-slide class="swiper-item">
        <div
          @click="gotoCate(item)"
          class="cate"
          v-for="item in foodCategoryList.slice(0, foodCategoryList.length / 2)"
          :key="item.id"
        >
          <img :src="`https://fuss10.elemecdn.com${item.image_url}`" alt="" />
          <span>{{ item.title }}</span>
        </div>
      </swiper-slide>
      <swiper-slide class="swiper-item">
        <div
          @click="gotoCate(item)"
          class="cate"
          v-for="item in foodCategoryList.slice(
            foodCategoryList.length / 2,
            foodCategoryList.length + 1
          )"
          :key="item.id"
        >
          <img :src="`https://fuss10.elemecdn.com${item.image_url}`" alt="" />
          <span>{{ item.title }}</span>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script setup lang="ts">
import 'swiper/css'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { useRoute, useRouter } from 'vue-router'
import { storeToRefs } from 'pinia'
import { useFoodStore } from '@/stores/food'

const { query } = useRoute()
const router = useRouter()

const foodStore = useFoodStore()

foodStore.getFoodCategory()
const { foodCategoryList } = storeToRefs(foodStore)

const gotoCate = (cate) => {
  let url = decodeURIComponent(cate.link)
  let cateQuery = {
    geohash: query.geohash,
    title: cate.title
  }
  // 提取id，报错代表没有id
  try {
    // 取首个大括号索引
    let start = url.indexOf('{')
    // 取最后一个大括号索引
    let end = url.indexOf('&')
    // 截取字符串对象
    let strObj = url.slice(start, end)
    // 转换为JSON并解构出id
    let {
      restaurant_category_id: { id }
    } = JSON.parse(strObj)
    cateQuery['restaurant_category_id'] = id
  } catch (err) {
    cateQuery['restaurant_category_id'] = ''
  }
  // 没有id直接跳转
  router.push({
    name: 'foodCate',
    query: cateQuery
  })
}
</script>

<style scoped lang="scss">
.carousel {
  background-color: #fff;
  border-bottom: 0.02rem solid #cccccc;
  .swiper {
    .swiper-item {
      display: flex;
      flex-flow: wrap;
      padding: 0.2rem 0.28rem;
    }
    .cate {
      padding: 0.2rem;
      width: 25%;
      display: flex;
      justify-content: space-around;
      flex-direction: column;
      align-items: center;

      img {
        width: 1rem;
      }
    }
  }
}
</style>
