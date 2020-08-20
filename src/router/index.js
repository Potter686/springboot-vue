import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import UserManager from "../views/UserManager";
import App from "../App";
import AddUser from "../views/AddUser";
import UserUpdate from "../views/UserUpdate";
import PageFour from "../views/PageFour";
import Index from "../views/Index";

Vue.use(VueRouter);

  const routes = [
    {
      path: "/",
      show:true,
      name: "图书管理",
      component: Index,
      redirect:"/UserManager",
      children:[
        {
          path: "/UserManager",
          name: "查询",
          component: UserManager
        },
        {
          path: "/AddUser",
          name: "添加",
          component: AddUser
        }
      ]
    },
    {
      path: "/UserUpdate",
      show: false,
      component: UserUpdate
    }

];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router
