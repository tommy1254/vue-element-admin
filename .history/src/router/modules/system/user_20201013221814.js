import Layout from '@/layout'

const AdminUserRouter = {
    path: '/user',
    component: Layout,
    redirect: 'noRedirect',
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
        }
    ]
}
export default AdminUserRouter