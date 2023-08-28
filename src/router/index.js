import Vue from 'vue';
import VueRouter from 'vue-router';
import admin from '@/views/Admin.vue'
import edit from '@/views/EditPage.vue'
import auth from '@/views/AuthPage.vue'
Vue.use(VueRouter);

const routes = [
  {
    path: '/auth',
    name: 'auth',
    component: auth,
    meta: {
        layout: "auth"
    }
  },
  {
    path: '/',
    redirect: '/auth'
  },
  {
    path: '/admin',
    name: 'admin',
    component: admin,
    meta: {
        layout: "admin"
    }
  },
  {
    path: '/edit',
    name: 'edit',
    component: edit,
    meta: {
        layout: "edit"
    }
  }
];

const router = new VueRouter({
  mode: 'history',
  base: '/',
  routes
});


export default router;
