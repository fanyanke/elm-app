import service from '@/utils/request'

export const getFoodCategoryService = () => service.get('/v2/index_entry')
