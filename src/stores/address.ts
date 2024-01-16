import { reactive, ref } from 'vue'
import { defineStore } from 'pinia'
import { getCityService, getCityAddressService } from '@/api/address'

export const useAddressStore = defineStore(
  'address',
  () => {
    // 当前城市
    let currentCity = reactive({})
    // 获取当前城市
    let getCurrentCity = async (query) => {
      const res = await getCityService(query)
      Object.assign(currentCity, res)
    }

    // 推荐城市
    let hotCity = reactive([])
    // 获取推荐城市
    let getHotCity = async (query) => {
      const res = await getCityService(query)
      Object.assign(hotCity, res)
    }

    // 对象排序方法
    const sortCity = (citys) => {
      let obj = {}
      Object.keys(citys)
        .sort()
        .map((item) => {
          obj[item] = citys[item]
        })

      return obj
    }

    // 所有城市
    let allCity = reactive({})
    // 获取所有城市
    let getAllCity = async (query) => {
      let res = await getCityService(query)
      res = sortCity(res)
      Object.assign(allCity, res)
    }

    // 根据当前城市搜索的地址列表
    let cityAddress = reactive([])
    // 获取搜索地址
    let getCityAddress = async (query) => {
      let res = await getCityAddressService(query)
      // 后端返回的数据类型为数组时代表获取到了真正的数据
      if (res instanceof Array) {
        Object.assign(cityAddress, res)
      } else {
        throw new Error('去看看后端接口是不是出错了')
      }
    }

    // 历史记录数据
    let searchHistory = ref([])
    // 增加历史记录
    let addHistory = (address) => {
      searchHistory.value.push(address)
    }

    return {
      currentCity,
      getCurrentCity,
      hotCity,
      getHotCity,
      allCity,
      getAllCity,
      cityAddress,
      getCityAddress,
      searchHistory,
      addHistory
    }
  },
  {
    persist: {
      key: 'searchHistory',
      storage: localStorage,
      paths: ['searchHistory']
    }
  }
)
