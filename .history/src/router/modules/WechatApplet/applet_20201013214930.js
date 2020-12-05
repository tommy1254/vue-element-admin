import Layout from '@/layout'
const chartsRouter = {
    path: '/WechatApplet',
    component: Layout,
    redirect: 'noRedirect',
    name: '微信小程序',
    meta: {
        title: '微信小程序',
        icon: 'el-icon-setting'
    },
    children: [

    ]
}
export default chartsRouter