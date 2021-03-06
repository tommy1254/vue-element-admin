import { asyncRoutes, constantRoutes } from '@/router'

/**
 * 通过meta.role判断是否与当前用户权限匹配
 * @param roles
 * @param route
 */
function hasPermission(roles, route) {
  if (route.meta && route.meta.roles) {
    console.log('flase')
    console.log(role)
    console.log(route.meta.roles.includes(role))
    return roles.some(role => route.meta.roles.includes(role))
  } else {
    console.log('true')
    return true
  }
}

/**
 * 递归过滤异步路由表，返回符合用户角色权限的路由表
 * @param routes asyncRoutes
 * @param roles
 */
export function filterAsyncRoutes(routes, roles) {
  const res = []
  routes.forEach(route => {
    const tmp = { ...route }
    if (hasPermission(roles, tmp)) {
      console.info('kk   hasPermission')
      if (tmp.children) {
        tmp.children = filterAsyncRoutes(tmp.children, roles)
      }
      res.push(tmp)
    }
    console.info('chu   hasPermission')
  })
  console.info('res')
  console.info(res)
  return res
}

const state = {
  routes: [],
  addRoutes: []
}

const mutations = {
  SET_ROUTES: (state, routes) => {
    state.addRoutes = routes
    state.routes = constantRoutes.concat(routes)
  }
}

const actions = {
  //通过 角色 和 所有路由 匹配出对应角色拥有的路由权限
  generateRoutes({ commit }, roles) {
    console.info("6.通过 角色 和 所有路由 匹配出对应角色拥有的路由权限 返回路由组");
    return new Promise(resolve => {
      let accessedRoutes
      if (roles.includes('admin')) {
        accessedRoutes = asyncRoutes || []
      } else {
        //console.info('no admin')
        accessedRoutes = filterAsyncRoutes(asyncRoutes, roles)
      }
      console.info(asyncRoutes)
      console.info(accessedRoutes)
      commit('SET_ROUTES', accessedRoutes)
      resolve(accessedRoutes)
    })
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
