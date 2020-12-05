import Layout from '@/layout'

const AdminUserRouter = {
    path: 'user',
    //component: Layout,
    redirect: '/system/user',
    component: () => import('@/views/system/user/index'),
    name: '权限',
    meta: {
        title: '权限',
        icon: 'el-icon-setting'
    },
    children: [
        {
            path: 'menu',
            name: '权限目录',
            component: () => import('@/views/system/user/menu'),
            meta: { title: '权限目录' }
        },
        {
            path: 'role',
            name: '角色管理',
            component: () => import('@/views/system/user/role'),
            meta: { title: '角色管理' }
        },
        {
            path: 'user',
            name: '管理员',
            component: () => import('@/views/system/user/user'),
            meta: { title: '管理员' }
        },
        {
            path: 'log',
            name: '管理员日志',
            component: () => import('@/views/system/user/log'),
            meta: { title: '管理员日志' }
        },
    ]
}
export default AdminUserRouter