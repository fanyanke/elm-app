import service from '@/utils/request'

// 获取home商家列表
export const getMerchantListService = (query) =>
  service.get('/shopping/restaurants', { params: { ...query } })
