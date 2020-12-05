import Layout from '@/layout'
const blogRouter = {
    path: '/nested',
  component: Layout,
  redirect: '/nested/menu1/menu1-1',
  name: '路由嵌套',
  meta: {
    title: '路由嵌套',
    icon: 'nested'
  },
  children: [
      
  ]
}
export default blogRouter