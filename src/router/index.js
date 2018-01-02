import Vue from 'vue'
import Router from 'vue-router'
import AdminIndex from '@/components/admin/Index'
import AdminMissionsNew from '@/components/admin/New'
import AdminMissionsEdit from '@/components/admin/Edit'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/admin',
      name: 'AdminIndex',
      component: AdminIndex
    },
    {
      path: '/admin/new',
      name: 'AdminMissionsNew',
      component: AdminMissionsNew
    },
    {
      path: '/admin/:id/edit',
      name: 'AdminMissionsMissionsNew',
      component: AdminMissionsEdit
    }
  ]
})
