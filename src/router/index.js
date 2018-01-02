import Vue from 'vue'
import Router from 'vue-router'
import AdminIndex from '@/components/admin/Index'
import AdminNew from '@/components/admin/New'
import AdminEdit from '@/components/admin/Edit'

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
      name: 'AdminNew',
      component: AdminNew
    },
    {
      path: '/admin/edit',
      name: 'AdminNew',
      component: AdminEdit
    }
  ]
})
