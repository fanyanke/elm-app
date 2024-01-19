<template>
  <div class="search-food-page">
    <comm-header title="搜索"></comm-header>
    <div class="search-food margin-header">
      <input
        ref="inp"
        v-model="keyword"
        type="text"
        placeholder="请输入商家或美食名称"
      />
      <el-button @click="submit" class="submit" type="primary">提交</el-button>
    </div>
    <div class="history" v-if="showFlag">
      <span>搜索历史</span>
      <ul>
        <li
          @click="getMerchant(i)"
          v-for="(i, index) in merchantStore.merchantHistory"
          :key="index"
        >
          {{ i.keyword }}
        </li>
      </ul>
      <div
        class="clear"
        @click="merchantStore.merchantHistory = []"
        v-show="merchantStore.merchantHistory.length !== 0"
      >
        清空所有
      </div>
    </div>
    <div class="search-result" v-if="!showFlag">
      <span
        class="merchanttext"
        v-if="merchantStore.searchMerchantList.length !== 0"
        >商家</span
      >
      <ul>
        <li v-for="item in merchantStore.searchMerchantList" :key="item.id">
          <img :src="`http://elm.cangdu.org/img/${item.image_path}`" alt="" />
          <div class="msg">
            <span class="title">{{ item.name }} </span>
            <span class="sales">月售 {{ item.recent_order_num }} 单</span>
            <span>20元起送 / 距离{{ item.distance }}</span>
          </div>
        </li>
      </ul>
      <div class="tip" v-if="merchantStore.searchMerchantList.length === 0">
        很抱歉！无搜索结果
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { ElMessage } from 'element-plus'
import { useGlobalStore } from '@/stores/global'
import { useMerchantStore } from '@/stores/merchant'
import { getSearchMerchantService } from '@/api/merchant'
import CommHeader from '@/components/headers/CommHeader.vue'

const keyword = ref('')
const inp = ref()
const showFlag = ref(true)
const globalStore = useGlobalStore()
const merchantStore = useMerchantStore()
const submit = async () => {
  // 搜索词为空判断
  if (!keyword.value) {
    return ElMessage({
      message: '请输入地址!',
      type: 'warning',
      duration: 1000,
      grouping: true,
      onClose: () => {
        inp.value.focus()
      }
    })
  }

  // 添加历史纪录
  merchantStore.addSearchHistory({ keyword: keyword.value })

  // 发起请求
  const query = { geohash: globalStore.geohash, keyword: keyword.value }
  const res = await getSearchMerchantService(query)
  if (res instanceof Array) {
    merchantStore.searchMerchantList = res
  }

  showFlag.value = false
}

const getMerchant = async (i) => {
  const query = { geohash: globalStore.geohash, keyword: i.keyword }
  const res = await getSearchMerchantService(query)
  if (res instanceof Array) {
    merchantStore.searchMerchantList = res
  }
  showFlag.value = false
}
</script>

<style scoped lang="scss">
.search-food-page {
  .search-food {
    background-color: #fff;
    padding: 0.2rem 0.3rem;
    display: flex;
    justify-content: space-between;
    input {
      height: 0.8rem;
      width: 80%;
      border: 1px solid #ccc;
      margin-right: 10px;
      padding: 0 0.2rem;
      background-color: #f5f5f5;
    }
    .submit {
      width: 20%;
      height: 0.8rem;
    }
  }
  .history {
    span {
      //padding: 0.2rem 0.3rem;
      height: 1rem;
      width: 100%;
      display: inline-block;
      line-height: 1rem;
      padding-left: 0.3rem;
    }
    ul {
      display: flex;
      justify-content: space-around;
      align-items: center;
      flex-direction: column;
      li {
        width: 100%;
        height: 1rem;
        background-color: #fff;
        border-bottom: 1px solid #ccc;
        text-align: start;
        line-height: 1rem;
        padding-left: 0.4rem;
      }
    }
    .clear {
      width: 100%;
      height: 1rem;
      background-color: #fff;
      text-align: center;
      line-height: 1rem;
    }
  }
  .search-result {
    .merchanttext {
      height: 1rem;
      width: 100%;
      display: inline-block;
      line-height: 1rem;
      padding-left: 0.3rem;
    }

    ul {
      li {
        display: flex;
        justify-content: space-around;
        align-items: center;
        background-color: #fff;
        padding: 0.2rem 0.3rem;
        img {
          height: 1rem;
          width: 1rem;
        }
        .msg {
          display: flex;
          flex-direction: column;
          width: 80%;
          font-size: 12px;
          border-bottom: 1px solid #ccc;
          span {
            margin-bottom: 0.08rem;
          }
        }
      }
    }

    .tip {
      width: 100%;
      height: 1rem;
      background-color: #fff;
      text-align: center;
      line-height: 1rem;
      margin-top: 0.3rem;
    }
  }
}
</style>
