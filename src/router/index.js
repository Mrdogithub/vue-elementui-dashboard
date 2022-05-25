import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/* Layout */
import Layout from '@/layout'
export const constantRoutes = [
  {
    path: '/login',
    component: () => import('@/views/login/index'),
    hidden: true
  },

  {
    path: '/404',
    component: () => import('@/views/404'),
    hidden: true
  },

  {
    path: '/',
    component: Layout,
    redirect: '/chart',
    hidden: true,
    children: [{
      path: 'chart',
      name: 'chart',
      component: () => import('@/views/chart/index'),
      meta: { title: '图表统计', icon: 'dashboard' }
    }]
  },


  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    children: [{
      path: 'dashboard',
      name: 'dashboard',
      component: () => import('@/views/dashboard/index'),
      meta: { title: '首页', icon: 'dashboard' }
    }]
  },
  {
    path: '/warning',
    component: Layout,
    children: [
      {
        path: 'warning',
        name: 'Form',
        component: () => import('@/views/warning/index'),
        meta: { title: '核心指标预警', icon: 'form' }
      }
    ]
  },
  {
    path: '/dealer',
    component: Layout,
    children: [
      {
        path: 'dealer',
        name: 'dealer',
        component: () => import('@/views/dealer/index'),
        meta: { title: '店端巡检', icon: 'form' }
      }
    ]
  },
  {
    path: '/report',
    component: Layout,
    redirect: '/report/daily/index',
    name: 'Example',
    meta: { title: '报表中心', icon: 'el-icon-s-help' },
    children: [
      {
        path: 'daily',
        name: 'daily',
        component: () => import('@/views/report/daily/index'),
        meta: { title: '微信日报', icon: 'table' }
      },
      {
        path: 'data',
        name: 'data',
        component: () => import('@/views/report/data/index'),
        meta: { title: '发条数据统计', icon: 'tree' }
      },
      {
        path: 'custom',
        name: 'custom',
        component: () => import('@/views/report/custom/index'),
        meta: { title: '自定义报表', icon: 'tree' }
      },
      {
        path: 'approval',
        name: 'approval',
        component: () => import('@/views/report/approval/index'),
        meta: { title: '自定义审批流', icon: 'tree' }
      }
    ]
  }
]

const createRouter = () => new Router({
  // mode: 'history', // require service support
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes
})

const router = createRouter()

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router
