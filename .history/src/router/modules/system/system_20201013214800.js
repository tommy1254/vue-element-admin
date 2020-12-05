import Layout from '@/layout'
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

    ]
}
export default systemRouter