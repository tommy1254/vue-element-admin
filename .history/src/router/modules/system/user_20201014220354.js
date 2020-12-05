import Layout from '@/layout'

const AdminUserRouter = {
    path: 'user',
    redirect: 'noRedirect',
    component: () => import('@/views/system/user/index'),
    name: '权限',
    meta: { title: '权限', icon: 'el-icon-setting',
    //  showRole: true 
    },
    children: [
        {
            path: 'menu',
            component: () => import('@/views/system/user/menu'),
            name: '权限目录',
            meta: { title: '权限目录'}
        },
        {
            path: 'role',
            component: () => import('@/views/system/user/role'),
            name: '角色管理',
            meta: { title: '角色管理', showRole: false, activeMenu: '/views/system/user/index' }
        },
        {
            path: 'user',
            component: () => import('@/views/system/user/user'),
            name: '管理员',
            meta: { title: '管理员', showRole: false, activeMenu: '/views/system/user/index' }
        },
        {
            path: 'log',
            component: () => import('@/views/system/user/log'),
            name: '管理员日志',
            meta: { title: '管理员日志', showRole: false, activeMenu: '/views/system/user/index' }
        },
    ]
}
export default AdminUserRouter