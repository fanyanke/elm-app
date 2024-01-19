import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useGlobalStore = defineStore(
  'global',
  () => {
    let footerFlag = ref(false)

    // 当前定位经纬度
    const geohash = ref('')

    return {
      footerFlag,
      geohash
    }
  },
  {
    persist: {
      key: 'geohash',
      storage: localStorage,
      paths: ['geohash']
    }
  }
)
