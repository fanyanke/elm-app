import { defineStore } from 'pinia'
import { ref } from 'vue'
import { getMerchantListService } from '@/api/merchant'

export const useMerchantStore = defineStore('merchant', () => {
  let merchantList = ref([])
  let getMerchantList = async (query) => {
    merchantList.value = await getMerchantListService(query)
  }
  return {
    merchantList,
    getMerchantList
  }
})
