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
        { AdminUserRouter }
    ]
}
export default systemRouter