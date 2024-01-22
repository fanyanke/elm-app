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
      />
      <el-cascader
        placeholder="排序"
        class="cascader"
        v-model="sortValue"
        :options="sortOptions"
        :props="sortProps"
      />
      <el-select
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
      </el-select>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, toRefs } from 'vue'
import { useRoute } from 'vue-router'
import { useMerchantStore } from '@/stores/merchant'
import HeaderNav from '@/components/headers/CommHeader.vue'

const { query } = toRefs(useRoute())
let foodCateValue = ref([query.value.restaurant_category_id])
let sortValue = ref([])
let filterValue = ref([])
const merchantStore = useMerchantStore()
// 获取商家分类
merchantStore.getMerchantCate()
// 获取商家活动
merchantStore.getMerchantAttr()

let foodProps = {
  label: 'name',
  value: 'id',
  children: 'sub_categories'
}
let sortProps = {
  label: 'name',
  value: 'id'
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
</script>
<style scoped lang="scss">
.food-page {
  .cascader-list {
    display: flex;
    justify-content: space-between;
    position: fixed;
    .select {
      width: 55%;
    }
  }
}
</style>
