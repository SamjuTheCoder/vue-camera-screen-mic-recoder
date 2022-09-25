import Vue from 'vue'
import VueRouter from 'vue-router'
import sideBar from '../components/sideBar'
import myRecording from '../components/myRecording'
import startRecord from '../components/startRecord'
//import topNav from '../components/topNav'

Vue.use(VueRouter)

const routes = [
 
  {
    path: '/',
    name: 'sideBar',
    component: sideBar,
    children: [
      {
        path: "/my-recording",
        name: "myRecording",
        component: myRecording,
      },
      {
        path: "/start-record/:media",
        name: "startRecord",
        component: startRecord,
      },
    ],
    
  },
  // {
  //   path: '/top',
  //   name: 'topNav',
  //   component: topNav,
  //   children: [
  //     {
  //       path: "/start-record",
  //       name: "startRecord",
  //       component: startRecord,
  //     },
  //   ],
    
  // },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
