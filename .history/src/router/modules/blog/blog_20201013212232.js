import Layout from '@/layout'
const blogRouter = {
    path: '/nested',
    component: Layout,
    redirect: '/nested/menu1/menu1-1',
    name: '博客',
    meta: {
        title: '博客',
        icon: 'nested'
    },
    children: [

    ]
}
export default blogRouter