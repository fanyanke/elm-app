<template>
  <div class="food-page margin-header">
    <header-nav :title="$route.query.title"></header-nav>
    <div class="cascader-list">
      <el-cascader
        class="cascader"
        v-model="foodCateValue"
        :options="merchantStore.merchantCateList"
        :props="foodProps"
        :placeholder="query.title"
        @change="refresh"
      />
      <el-select
        @change="refresh"
        v-model="sortValue"
        class="select"
        placeholder="排序"
      >
        <el-option
          v-for="item in sortOptions"
          :key="item.id"
          :label="item.name"
          :value="item.id"
        >
        </el-option>
      </el-select>
      <el-select
        multiple
        collapse-tags
        collapse-tags-tooltip
        v-model="filterValue"
        class="select"
        placeholder="筛选"
      >
        <el-option
          v-for="item in merchantStore.merchantAttrList"
          :key="item.id"
          :label="item.name"
          :value="item.id"
        >
        </el-option>
        <template #footer>
          <el-button @click="filterValue = []">清空</el-button>
          <el-button @click="refresh" type="primary">确定</el-button>
        </template>
      </el-select>
    </div>
    <div class="merchant-list">
      <merchant-list :merchantList="merchantStore.merchantList"></merchant-list>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, toRefs } from 'vue'
import { useRoute } from 'vue-router'
import { useMerchantStore } from '@/stores/merchant'
import HeaderNav from '@/components/headers/CommHeader.vue'
import MerchantList from '@/components/home/MerchantList.vue'
import request from '@/utils/request'

const { query } = toRefs(useRoute())
let foodCateValue = ref([query.value.restaurant_category_id])
let sortValue = ref()
let filterValue = ref([])
const merchantStore = useMerchantStore()
// 获取商家分类
merchantStore.getMerchantCate()
// 获取商家活动
merchantStore.getMerchantAttr()

let geohash = query.value.geohash.split(',')
let latitude = geohash[0]
let longitude = geohash[1]
let restaurant_category_id = query.value.restaurant_category_id
let requestQuery = { latitude, longitude, restaurant_category_id }
// 获取商铺列表
merchantStore.getMerchantList(requestQuery)

let foodProps = {
  label: 'name',
  value: 'id',
  children: 'sub_categories'
}

let sortOptions = [
  {
    name: '智能排序',
    id: '4'
  },
  {
    name: '距离最近',
    id: '5'
  },
  {
    name: '销量最高',
    id: '6'
  },
  {
    name: '起送价最低',
    id: '1'
  },
  {
    name: '配送速度最快',
    id: '2'
  },
  {
    name: '评分最高',
    id: '3'
  }
]

let refresh = () => {
  // 选中option后更新请求参数并重新发起请求
  requestQuery['order_by'] = sortValue.value
  if (filterValue.value.length != 0) {
    requestQuery['support_ids'] = filterValue.value
  }

  requestQuery.restaurant_category_id = ''
  // 必须要数组类型，但又只要一个参数
  requestQuery['restaurant_category_ids'] = [foodCateValue.value[1]]
  console.log(requestQuery)
  merchantStore.getMerchantList(requestQuery)
}
</script>
<style scoped lang="scss">
.food-page {
  .cascader-list {
    background-color: #fff;
    border-bottom: 1px solid #ccc;
    display: flex;
    position: fixed;
    width: 100%;
    z-index: 999;
    .select {
      width: 50%;
    }
  }
  .merchant-list {
    background-color: #fff;
    padding: 0.6rem 0.2rem 0;
  }
}
</style>
