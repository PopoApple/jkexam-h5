import http from './http'

export function apiList({ page }) {
  let params = {
    current: page || 1,
    entity: {
    },
    size: 10,
  }
  return http({
    method: 'post',
    url: '/csProduct/listByPage',
    data: JSON.stringify(params),
  })
}

export function apiGet(axios) {
  return http({
    method: 'get',
    url: '/csProduct/filter',
  })
}