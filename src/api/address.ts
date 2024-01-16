import service from '@/utils/request'

export const getCityService = (query) => service.get(`/cities?type=${query}`)
