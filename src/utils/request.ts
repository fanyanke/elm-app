import axios from 'axios'
import { ElLoading } from 'element-plus'

let loading

const service = axios.create({
  baseURL: 'http://127.0.0.1:8001/v1',
  timeout: 5000
})

// 请求拦截器
service.interceptors.request.use((config) => {
  loading = ElLoading.service({
    lock: true,
    text: 'Loading',
    background: '#ccc'
  })
  return config
})

// 响应拦截器
service.interceptors.response.use((response) => {
  if (response.status === 200) {
    loading.close()
    return response.data
  }
})

export default service
