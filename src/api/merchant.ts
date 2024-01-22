import service from '@/utils/request'

// 获取home商家列表
export const getMerchantListService = (query) =>
  service.get('/shopping/restaurants', { params: { ...query } })

// 根据经纬度与关键词搜索商家列表
export const getSearchMerchantService = (query) =>
  service.get('/v4/restaurants', { params: { ...query } })

// 商铺分类列表
export const getMerchantCateService = () =>
  service.get('/shopping/v2/restaurant/category')

// 商铺属性活动列表
export const getMerchantAttrService = () =>
  service.get('/shopping/v1/restaurants/activity_attributes')
