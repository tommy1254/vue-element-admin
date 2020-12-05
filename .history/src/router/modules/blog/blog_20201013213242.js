import Layout from '@/layout'
const blogRouter = {
    path: '/blog',
    component: Layout,
    redirect: 'noRedirect',
    name: '博客',
    meta: {
        title: '博客',
        icon: 'people'
    },
    children: [
        
    ]
}
export default blogRouter