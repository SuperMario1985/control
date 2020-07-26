import Vue from 'vue'
import Router from 'vue-router'
import Demo from '@/components/Demo'

Vue.use(Router)

let router = new Router({
  routes: [
    {
      path: '/',
      redirect: '/demo'
    },
    {
      path: '/demo',
      name: 'Demo',
      component: Demo
    },
    {
      path: '*',
      name: 'Demo',
      component: Demo
    }
  ]
})

// 路由守卫
// router.beforeEach((to, from, next) => {
//   debugger
//   if (to.matched.length > 0) {
//     next()
//   } else {
//     let path = to.path;
//     let catId = 1;
//     if (path.indexOf('question-list/')) {
//       let num = path.indexOf('question-list/');
//       catId = path.slice(15, 15 + 1);
//       debugger
//     }
//     next({
//       path: "/"
//     });
//   }
// })
export default router
