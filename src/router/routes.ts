import type { RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'index',
    redirect: { name: 'loginMain' },
    // component: () => import('layouts/MainLayout.vue'),
    // children: [{ path: '', component: () => import('pages/IndexPage.vue') }],
  },

  {
    path: '/login',
    name: 'login',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', name: 'loginMain', component: () => import('pages/LoginPage.vue') }],
    meta: { requiresNoAuth: true },
  },

  {
    path: '/dashboard',
    name: 'dashboard',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', name: 'dashboardMain', component: () => import('pages/DashboardPage.vue') },
    ],
    meta: { requiresAuth: true },
  },

  {
    path: '/report',
    name: 'report',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', name: 'reportMain', component: () => import('pages/ReportPage.vue') }],
    meta: { requiresAuth: true },
  },

  {
    path: '/pasreset',
    name: 'pasreset',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', name: 'pasResetMain', component: () => import('pages/PasResetPage.vue') },
    ],
    meta: { requiresNoAuth: true },
  },

  {
    path: '/:catchAll(.*)*',
    name: '404 error',
    component: () => import('pages/ErrorNotFound.vue'),
  },
]

export default routes
