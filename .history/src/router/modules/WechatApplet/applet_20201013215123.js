import Layout from '@/layout'
const WechatAppletRouter = {
    path: '/WechatApplet',
    component: Layout,
    redirect: 'noRedirect',
    name: '微信小程序',
    meta: {
        title: '微信小程序',
        icon: 'wechat'
    },
    children: [

    ]
}
export default WechatAppletRouter