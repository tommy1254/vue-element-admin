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
            //component: Layout,
            redirect: 'noRedirect',
            component: () => import('@/views/system/user/index'),
            name: '权限',
            meta: {
                title: '权限',
                icon: 'el-icon-setting',
                showRole:true},
            children: [
                {
                    path: 'menu',
                    component: () => import('@/views/system/user/menu'),
                    name: '权限目录',
                    meta: { title: '权限目录',showRole:false,activeMenu:'/views/system/user/index' }
                },
                {
                    path: 'role',
                    name: '角色管理',
                    component: () => import('@/views/system/user/role/index'),
                    meta: { title: '角色管理' }
                },
                {
                    path: 'user',
                    name: '管理员',
                    component: () => import('@/views/system/user/user/index'),
                    meta: { title: '管理员' }
                },
                {
                    path: 'log',
                    name: '管理员日志',
                    component: () => import('@/views/system/user/log/index'),
                    meta: { title: '管理员日志' }
                },
            ] 
        }
    ]
}
export default systemRouter