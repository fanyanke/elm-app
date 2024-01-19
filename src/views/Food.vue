<template>
  <div class="food-page margin-header">
    <header-nav :title="$route.query.title"></header-nav>
    <div class="cascader-list">
      <el-cascader
        class="cascader"
        v-model="value"
        :options="merchantStore.merchantCateList"
        :props="props"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { storeToRefs } from 'pinia'
import { useMerchantStore } from '@/stores/merchant'
import HeaderNav from '@/components/headers/CommHeader.vue'

let value = ref([260,229])
const merchantStore = useMerchantStore()
merchantStore.getMerchantCate()
let props = {
  label: 'name',
  value: 'id',
  children:'sub_categories'
}
</script>
<style scoped lang="scss">
.food-page {
  .cascader-list {
    display: flex;
    justify-content: space-between;
  }
}
</style>
