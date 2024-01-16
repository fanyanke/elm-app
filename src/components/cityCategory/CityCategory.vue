<template>
  <div class="city-category-page">
    <div class="city-category" v-if="flag">
      <div class="title">热门城市</div>
      <ul>
        <li
          class="blue"
          v-for="item in citys"
          :key="item.id"
          @click="goto(item)"
        >
          {{ item.name }}
        </li>
      </ul>
    </div>
    <template v-if="!flag">
      <div
        class="city-category"
        v-for="(val, key, index) in citys"
        :key="index"
      >
        <div class="title" v-if="index === 0">
          {{ key }} <span class="tip">（按照字母排序）</span>
        </div>
        <div class="title" v-else>{{ key }}</div>
        <ul>
          <li v-for="item in val" :key="item.id" @click="goto(item)">
            {{ item.name }}
          </li>
        </ul>
      </div>
    </template>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
const props = defineProps(['citys'])
const flag = props.citys instanceof Array

const router = useRouter()

const goto = (city) => {
  router.push({
    name: 'searchAddressPage',
    query: { id: city.id, name: city.name }
  })
}
</script>

<style scoped lang="scss">
.city-category-page {
  .city-category {
    margin-top: 0.24rem;
    background-color: #fff;

    .title {
      border-top: 0.04rem solid #ccc;
      height: 0.7rem;
      line-height: 0.7rem;
      font-size: 0.28rem;
      padding-left: 0.3rem;
      border-bottom: 1px solid #ccc;
      .tip {
        font-size: 0.24rem;
      }
    }
    ul {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      li {
        padding: 0 0.2rem;
        background-color: #fff;
        font-size: 0.24rem;
        text-align: center;
        height: 0.8rem;
        display: inline-block;
        line-height: 0.8rem;
        border-right: 1px solid #ccc;
        border-bottom: 1px solid #ccc;
        overflow: hidden;
        white-space: nowrap; /* 防止文字换行 */
        text-overflow: ellipsis; /* 超出部分显示省略号 */
      }
      li:nth-child(4n) {
        border-right: none;
      }
    }
  }
}
</style>
