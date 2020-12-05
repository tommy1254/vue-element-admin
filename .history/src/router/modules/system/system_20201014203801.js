import Layout from '@/layout'

import AdminUserRouter from '../system/user'

const systemRouter = {
    path: '/system',
    component: Layout,
    redirect: 'noRedirect',
    name: '系统',
    meta: {
        title: '系统',
        icon: 'el-icon-setting'
    },
    children: [
        //AdminUserRouter
        {
            /* path: 'user',
            //component: Layout,
            redirect: '/system/user/menu/index',
            component: () => import('@/views/system/user/menu/index'),
            name: '权限',
            meta: {
                title: '权限',
                icon: 'el-icon-setting'
            },
            children: [
                {
                    path: 'menu',
                    name: '权限目录',
                    component: () => import('@/views/system/user/menu/index'),
                    meta: { title: '权限目录' }
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
            ] */
        }
    ]
}
export default systemRouter