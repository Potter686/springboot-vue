import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import PageOne from "../views/PageOne";
import App from "../App";
import PageTwo from "../views/PageTwo";
import PageThe from "../views/PageThe";
import PageFour from "../views/PageFour";
import Index from "../views/Index";
Vue.use(VueRouter);

  const routes = [
    {
      path: "/",
      name: "导航1123",
      component: Index,
      redirect:"/pageOne",
      children:[
        {
          path: "/pageOne",
          name: "页面1",
          component: PageOne
        },
        {
          path: "/pageTwo",
          name: "页面2",
          component: PageTwo
        }
      ]
    },
    {
      path: "/navigation",
      name: "导航2123",
      component: Index,
      children: [
        {
          path: "/pageThe",
          name: "页面3",
          component: PageThe
        },
        {
          path: "/PageFour",
          name: "页面4",
          component: PageFour
        }
      ]
    }


]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
