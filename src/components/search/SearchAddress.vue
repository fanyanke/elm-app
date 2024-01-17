<template>
  <div class="search-address">
    <div class="search">
      <input
        ref="inp"
        v-model.trim="keyword"
        type="text"
        placeholder="输入学校、商务楼、地址"
      />
      <el-button type="primary" @click="submit">提交</el-button>
    </div>
  </div>
  <div class="history" v-if="showFlag">
    <span>搜索历史</span>
    <ul>
      <li @click="getAddress(i)" v-for="i in searchHistory" :key="i.city_id">
        {{ i.keyword }}
      </li>
    </ul>
    <div class="clear" @click="clearHistory" v-if="searchHistory.length">
      清空所有
    </div>
  </div>
  <div class="search-result" v-else>
    <ul>
      <li v-for="i in cityAddress" :key="i.id" @click="goHome(i)">
        {{ i.name }}
      </li>
    </ul>
    <div class="tip" v-if="!cityAddress">很抱歉！无搜索结果</div>
    <div class="tip" v-else>共{{ cityAddress.length }}条结果</div>
  </div>
</template>

<script setup lang="ts">
import { ref, toRef } from 'vue'
import { storeToRefs } from 'pinia'
import { useRoute, useRouter } from 'vue-router'
import { ElMessage } from 'element-plus'
import { useAddressStore } from '@/stores/address'

// 历史记录与搜索结果显示标识
let showFlag = ref(true)
const router = useRouter()
const query = toRef(useRoute(), 'query')
const addressStore = useAddressStore()
const { cityAddress, searchHistory } = storeToRefs(addressStore)
let inp = ref()
let keyword = ref('')
const submit = () => {
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
  // 没有进入判断代表输入的不为空
  // 请求数据并渲染数据
  addressStore.getCityAddress({
    city_id: query.value.id,
    keyword: keyword.value
  })
  // 存储历史记录
  addressStore.addHistory({
    city_id: query.value.id,
    keyword: keyword.value
  })
  //点击提交后修改showFlag值为false展示搜索结果
  showFlag.value = false
}

const getAddress = (query) => {
  // 重新发起请求，并将showFlag值为false展示搜索结果
  addressStore.getCityAddress(query)
  showFlag.value = false
}

const clearHistory = () => {
  // 清空历史记录
  searchHistory.value = []
}

const goHome = (address) => {
  router.push({ path: '/home', query: { geohash: address.geohash } })
}
</script>

<style scoped lang="scss">
.search-address {
  //margin-top: 1rem;
  padding: 0.2rem 0.3rem;
  background-color: #fff;
  border-top: 0.02rem solid #ccc;
  border-bottom: 0.04rem solid #ccc;

  .search {
    display: flex;
    justify-content: space-between;
    flex-flow: column;
    //background-color: #fff;

    input {
      height: 0.7rem;
      border: 1px solid #ccc;
      margin-bottom: 0.2rem;
      padding: 0 0.1rem;
    }
  }
}
.history {
  display: flex;
  flex-flow: column;
  justify-content: space-between;
  span {
    display: inline-block;
    width: 100%;
    border-bottom: 0.04rem solid #ccc;
    font-size: 14px;
    padding: 0.08rem 0.24rem;
  }
  ul {
    display: flex;
    justify-content: space-around;
    flex-flow: column;
    li {
      width: 100%;
      background-color: #fff;
      border-bottom: 0.02rem solid #ccc;
      height: 1rem;
      text-align: start;
      padding: 0 0.5rem;
      line-height: 1rem;
    }
  }
  .clear {
    width: 100%;
    background-color: #fff;
    height: 1rem;
    text-align: center;
    padding: 0 0.5rem;
    line-height: 1rem;
  }
}

.search-result {
  ul {
    display: flex;
    justify-content: space-around;
    flex-flow: column;
    li {
      width: 100%;
      background-color: #fff;
      border-bottom: 0.02rem solid #ccc;
      height: 1rem;
      text-align: start;
      padding: 0 0.5rem;
      line-height: 1rem;
    }
  }
  .tip {
    width: 100%;
    height: 1rem;
    background-color: #fff;
    padding: 0 0.3rem;
    line-height: 1rem;
  }
}
</style>
