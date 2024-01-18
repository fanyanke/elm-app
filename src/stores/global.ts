import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useGlobalStore = defineStore('global', () => {
  let footerFlag = ref(false)

  return {
    footerFlag
  }
})
