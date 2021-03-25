import axios from 'axios'
import { apiPrefix, tenantCode, errorTips, whiteList } from '../config/api'

const axiosInstance = axios.create({
  baseURL: apiPrefix,
  headers: {
    common: {
      'Tenant-Code': tenantCode,
    },
    post: {
      'Content-Type': 'application/json',
    }
  },
})

// axiosClient.onRequest(config => {
//   if (whiteList.indexOf(config.url) === -1 && store.state.auth) {
//     config.headers['Authorization'] = 'Bearer ' + store.state.auth.token
//   }
// })

axiosInstance.interceptors.response.use((res) => {
  // Vue.$indicator.close()
  
  // const date = res.headers.date
  
  // serversDate = Number(new Date(date)) + 1000
  
  // Vue.prototype.$_t = serversDate
  
  return res.data
  
  }, (err) => {
  // Vue.$indicator.close()
  
  return Promise.reject(err)
  
  })

// axiosInstance.onResponse(response => {
//   // if (!isSuccess(response.data)) {
//   //   return Promise.reject({ statusCode: response.data.code, message: response.data.msg })
//   // }
//   return Promise.resolve(response.data)
// })

// axiosClient.onError(error => {
//   let statusCode
//   // if (error.statusCode !== undefined) {
//   //   statusCode = error.statusCode
//   // } else 
//   if (error.message && error.message.indexOf('timeout') >= 0) {
//     statusCode = 408
//   } else {
//     statusCode = parseInt(error.response && error.response.status)
//   }

//   if (statusCode === 401) {
//     // let code = error.response && error.response.data && error.response.data.code
//     // if (code === 4088) {
//     //   refreshToken()
//     // } else {
//       gotoLoLogin()
//     // }
//   } 
//   // else {
//     return Promise.reject({ statusCode, message: errorTips[statusCode] || null })
//   // }
// })

export default axiosInstance