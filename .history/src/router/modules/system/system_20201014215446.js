import Layout from '@/layout'

import AdminUserRouter from '../system/user'

const systemRouter = {
    path: '/system',
    component: Layout,
    redirect: 'noRedirect',
    name: '系统',
    meta: {title: '系统',icon: 'el-icon-setting'},
    children: [
        //AdminUserRouter
       {
            path: 'user',
            redirect: 'noRedirect',
            component: () => import('@/views/system/user/index'),
            name: '权限',
            meta: {title: '权限',icon: 'el-icon-setting',showRole:true},
            children: [
                {
                    path: 'menu',
                    component: () => import('@/views/system/user/menu'),
                    name: '权限目录',
                    meta: { title: '权限目录',showRole:false,activeMenu:'/views/system/user/index' }
                },
                {
                    path: 'role',
                    component: () => import('@/views/system/user/role'),
                    name: '角色管理',
                    meta: { title: '角色管理',showRole:false,activeMenu:'/views/system/user/index'  }
                },
                {
                    path: 'user',
                    name: '管理员',
                    component: () => import('@/views/system/user/user'),
                    meta: { title: '管理员',showRole:false,activeMenu:'/views/system/user/index'  }
                },
                {
                    path: 'log',
                    name: '管理员日志',
                    component: () => import('@/views/system/user/log'),
                    meta: { title: '管理员日志',showRole:false,activeMenu:'/views/system/user/index'  }
                },
            ] 
        }
    ]
}
export default systemRouter