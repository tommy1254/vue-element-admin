import Layout from '@/layout'
const wechatRouter = {
    path: '/wechat',
    component: Layout,
    redirect: 'noRedirect',
    name: '微信',
    meta: {
        title: '微信',
        icon: 'wechat'
    },
    children: [

    ]
}
export default wechatRouter