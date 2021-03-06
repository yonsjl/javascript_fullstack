// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './vuex/store'
import '../static/css/reset.styl'
import {Swipe, SwipeItem, Icon, Field, ActionSheet, Toast, Panel, Area, SwipeCell, Button, Cell, Loading} from 'vant'
import 'vant/lib/index.css'
// import 'amfe-flexible'
import 'element-ui/lib/theme-chalk/index.css'
import {Dropdown, DropdownMenu, DropdownItem, Backtop} from 'element-ui'

Vue.use(Dropdown).use(DropdownMenu).use(DropdownItem).use(Backtop)

Vue.use(Swipe).use(SwipeItem).use(Icon).use(Field).use(ActionSheet).use(Toast).use(Panel).use(Area).use(SwipeCell).use(Button).use(Cell).use(Loading)

Vue.config.productionTip = false

router.beforeEach((to, from, next) =>{ // 路由重定向路由守卫(解决登录过期问题)
  document.title = to.meta.title
  // console.log(from)
  // console.log(to)
  window.scrollTo(0, 0)
  next()
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
