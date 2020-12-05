import Layout from '@/layout'
const shopRouter = {
    path: '/shop',
    component: Layout,
    redirect: 'noRedirect',
    name: '商城',
    meta: {
        title: '商城',
        icon: 'shop'
    },
    children: [

    ]
}
export default shopRouter