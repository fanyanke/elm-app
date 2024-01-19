import { defineStore } from 'pinia'
import { ref } from 'vue'
import { getMerchantListService, getMerchantCateService } from '@/api/merchant'

export const useMerchantStore = defineStore(
  'merchant',
  () => {
    let merchantList = ref([])
    let getMerchantList = async (query) => {
      merchantList.value = await getMerchantListService(query)
    }

    // 搜索商家历史纪录
    let merchantHistory = ref([])
    let addSearchHistory = (history) => {
      if (merchantHistory.value.length >= 6) {
        merchantHistory.value.pop()
        console.log(merchantHistory)
      }
      merchantHistory.value.push(history)
    }

    // 搜索商家结果
    let searchMerchantList = ref([])

    // 商铺分类列表
    let merchantCateList = ref([])
    let getMerchantCate = async () => {
      const res = await getMerchantCateService()
      merchantCateList.value = res
    }

    return {
      merchantList,
      getMerchantList,
      merchantHistory,
      addSearchHistory,
      searchMerchantList,
      merchantCateList,
      getMerchantCate
    }
  },
  {
    persist: {
      key: 'merchantHistory',
      storage: localStorage,
      paths: ['merchantHistory']
    }
  }
)
