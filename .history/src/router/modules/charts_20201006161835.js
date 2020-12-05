/** When your routing table is too long, you can split it into small modules**/

import Layout from '@/layout'

const chartsRouter = {
  path: '/charts',
  component: Layout,
  redirect: 'noRedirect',
  name: '图表',
  meta: {
    title: '图表',
    icon: 'chart'
  },
  children: [
    {
      path: 'keyboard',
      component: () => import('@/views/charts/keyboard'),
      name: '键盘图表',
      meta: { title: '键盘图表', noCache: true }
    },
    {
      path: 'line',
      component: () => import('@/views/charts/line'),
      name: '折线图',
      meta: { title: '折线图', noCache: true }
    },
    {
      path: 'mix-chart',
      component: () => import('@/views/charts/mix-chart'),
      name: '混合图表',
      meta: { title: '混合图表', noCache: true }
    }
  ]
}

export default chartsRouter
