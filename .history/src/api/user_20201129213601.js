import request from '@/utils/request'
//登录
export function login(data) {
  return request({
    url: '/v1/admin/login',
    method: 'post',
    data
  })
}
//获取信息
export function getInfo(token) {
  return request({
    url: '/v1/admin/user/info',
    method: 'get',
    //params: { token }
  })
}
//退出
export function logout() {
  return request({
    url: '/v1/admin/logout',
    method: 'get'
  })
}
//获取列表
export function fetchList(query) {
  return request({
    url: '/v1/admin/user',
    method: 'get',
    params: query
  })
}
//修改
export function updateDisable(query) {
  return request({
    url: '/v1/admin/user',
    method: 'post',
    params: query
  })
}