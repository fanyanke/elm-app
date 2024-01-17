import service from '@/utils/request'

// 获取城市列表
export const getCityService = (query) => service.get(`/v1/cities?type=${query}`)

// 根据城市id和搜索关键词获取地址列表
export const getCityAddressService = (query) =>
  service.get('/v1/pois', { params: { ...query } })

// 根据经纬值获取详细地址
export const getDetailAddressService = (geohash) =>
  service.get(`/v2/pois/${geohash}`)
