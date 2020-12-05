import router from './router'
import store from './store'
import { Message } from 'element-ui'
import NProgress from 'nprogress' // progress bar  一个进度条的插件
import 'nprogress/nprogress.css' // progress bar style
import { getToken } from '@/utils/auth' // get token from cookie
import getPageTitle from '@/utils/get-page-title'

NProgress.configure({ showSpinner: false }) // NProgress Configuration  是否有转圈效果

const whiteList = ['/login', '/auth-redirect'] // no redirect whitelist  没有重定向白名单

router.beforeEach(async(to, from, next) => {
  // start progress bar // 开始进度条
  NProgress.start()

  // set page title // 设置页面标题
  document.title = getPageTitle(to.meta.title)

  // determine whether the user has logged in  // 确定用户是否已登录
  const hasToken = getToken()

  if (hasToken) {
    if (to.path === '/login') {
      // if is logged in, redirect to the home page  // 如果已登录，则重定向到主页
      next({ path: '/' })
      NProgress.done() // hack: https://github.com/PanJiaChen/vue-element-admin/pull/2939
    } else {
      // determine whether the user has obtained his permission roles through getInfo
      const hasRoles = store.getters.roles && store.getters.roles.length > 0
      if (hasRoles) {
         //console.log("有用户信息");
        next()
      } else {
        try {
          //console.log("无用户信息")
          // get user info  // 获得用户信息
          // note: roles must be a object array! such as: ['admin'] or ,['developer','editor']
          //监听路由改变的时候 调用 获取当前登录用户身份信息

          /* onsole.info("4.监听路由改变 然后获取当前登录的用户角色");
          const { roles } = await store.dispatch('user/getInfo')//拿到当前的用户信息 角色
          //实际是请求用户信息后返回，这里是模拟数据，直接从store中取
          // generate accessible routes map based on roles
          console.log(roles)
          const accessRoutes = await store.dispatch('permission/generateRoutes', roles)
          //将上面获取到的 路由权限 挂载到真实的路由上面去
          console.info("7.将上面获取到的 路由权限 挂载到真实的路由上面去");
          // dynamically add accessible routes
          router.addRoutes(accessRoutes) */
          const accessRoutes = await store.dispatch('GenerateRoutes')
          router.addRoutes(accessRoutes)
          next({ ...to, replace: true })
          // hack method to ensure that addRoutes is complete
          // set the replace: true, so the navigation will not leave a history record
          next({ ...to, replace: true })
        } catch (error) {
          //console.log("删除token")
          // remove token and go to login page to re-login // 删除token，进入登录页面重新登录
          await store.dispatch('user/resetToken')
          Message.error(error || 'Has Error')
          next(`/login?redirect=${to.path}`)
          NProgress.done()
        }
      }
    }
  } else {
    /* has no token*/

    if (whiteList.indexOf(to.path) !== -1) {
      // in the free login whitelist, go directly // 在免费登录白名单，直接去
      next()
    } else {
      // other pages that do not have permission to access are redirected to the login page. // 没有访问权限的其他页面被重定向到登录页面。
      next(`/login?redirect=${to.path}`)
      NProgress.done()
    }
  }
})

router.afterEach(() => {
  // finish progress bar // 完成进度条
  NProgress.done()
})
