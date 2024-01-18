import { defineStore } from 'pinia'
import { ref } from 'vue'
import { getFoodCategoryService } from '@/api/food'

export const useFoodStore = defineStore('food', () => {
  let foodCategoryList = ref([])
  // 获取食品分类
  const getFoodCategory = async () => {
    foodCategoryList.value = await getFoodCategoryService()
  }
  return {
    foodCategoryList,
    getFoodCategory
  }
})
