import { login, logout, getInfo } from '@/api/user'
import { getToken, setToken, removeToken } from '@/utils/auth'
import router, { resetRouter } from '@/router'
//状态列表
const state = {
  token: getToken(),
  name: '',
  avatar: '',
  introduction: '',
  roles: []  //添加角色变量
}
//修改vuex 的入口
const mutations = {
  SET_TOKEN: (state, token) => {
    state.token = token
  },
  SET_INTRODUCTION: (state, introduction) => {
    state.introduction = introduction
  },
  SET_NAME: (state, name) => {
    state.name = name
  },
  SET_AVATAR: (state, avatar) => {
    state.avatar = avatar
  },
  SET_ROLES: (state, roles) => {
    state.roles = roles
  }
}
//全局方法
const actions = {
  // user login 登录方法
  login({ commit }, userInfo) {
    console.info("2.vuex 里面的 login 方法被调用");
    const { username, password } = userInfo
    return new Promise((resolve, reject) => {
      //console.log("vuex中的请求")
      login({ user_name: username.trim(), password: password }).then(response => {
        //console.log('vuex中')
        //console.log(response);
        const { data } = response
        commit('SET_TOKEN', data.token)//存在vueX中
        setToken(data.token)//存在cookie中
        resolve()//返回成功
      }).catch(error => {
        reject(error)
      })
    })
  },

  // get user info 获取用户信息
  getInfo({ commit, state }) {
    return new Promise((resolve, reject) => {
      console.info("5.获取当前用户信息 获取角色组 并保存登录状态,返回当前角色信息");
      getInfo(state.token).then(response => {
        const { data } = response
        console.log(data)
        if (!data) {
          reject('Verification failed, please Login again.')
        }


        const menus =
        [{
          path: '/books',
          component: 'Layout',
          children: [{
            path: 'index',
            name: 'AddressBook',
            component: 'workbench/addressbook',
            meta: { title: '通讯录', icon: 'company' }
          }]
        },
        {
          path: '/systool',
          component: 'Layout',
          redirect: '/systool/coder',
          name: 'SysTool',
          meta: { title: '实验室', icon: 'example' },
          children: [
            {
              path: 'calendar',
              name: 'Calendar',
              component: 'workbench/calendar',
              meta: { title: '日程', icon: 'table' }
            }
          ]
        }]
        const { roles, name, avatar, introduction } = data

        // roles must be a non-empty array
        if (!roles || roles.length <= 0) {
          reject('getInfo: roles must be a non-null array!')
        }
        //修改用户登录的信息 调用 commit方法
        commit('SET_ROLES', roles)
        commit('SET_NAME', name)
        commit('SET_AVATAR', avatar)
        commit('SET_INTRODUCTION', introduction)

        commit('SET_MENUS', menus)
        resolve(data)
      }).catch(error => {
        reject(error)
      })
    })
  },

  // user logout  退出登录
  logout({ commit, state, dispatch }) {
    return new Promise((resolve, reject) => {
      logout(state.token).then(() => {
        commit('SET_TOKEN', '')
        commit('SET_ROLES', [])
        removeToken()
        resetRouter()

        // reset visited views and cached views
        // to fixed https://github.com/PanJiaChen/vue-element-admin/issues/2485
        dispatch('tagsView/delAllViews', null, { root: true })

        resolve()
      }).catch(error => {
        reject(error)
      })
    })
  },

  // remove token  清除登录信息 token什么的
  resetToken({ commit }) {
    return new Promise(resolve => {
      commit('SET_TOKEN', '')
      commit('SET_ROLES', [])
      removeToken()
      resolve()
    })
  },

  // dynamically modify permissions  更改角色 这个方法登录的时候应该不调用 是在登录成功后切换角色使用的
  async changeRoles({ commit, dispatch }, role) {
    console.info("4.调用vuex changeRoles 方法 进入");
    const token = role + '-token'

    commit('SET_TOKEN', token)
    setToken(token)

    const { roles } = await dispatch('getInfo')//调用这个文件里面的 getInfo方法

    resetRouter()

    // generate accessible routes map based on roles
    const accessRoutes = await dispatch('permission/generateRoutes', roles, { root: true })
    // dynamically add accessible routes
    router.addRoutes(accessRoutes)

    // reset visited views and cached views
    dispatch('tagsView/delAllViews', null, { root: true })
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
