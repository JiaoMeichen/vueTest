import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld.vue'
import HelloVue from '../components/HelloVue.vue'
import HelloList from '../components/HelloList.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },{
      path: '/HelloVue',
      name: 'HelloVue',
      component: HelloVue
    },{
      path: '/HelloList',
      name: 'HelloList',
      component: HelloList
    }
  ]
})
