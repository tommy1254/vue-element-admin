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
        
    ]
}
export default AdminUserRouter