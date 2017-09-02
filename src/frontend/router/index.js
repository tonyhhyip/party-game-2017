import Vue from 'vue';
import VueRouter from 'vue-router';
import Meta from 'vue-meta';

Vue.use(VueRouter);
Vue.use(Meta);

export default function () {
  return new VueRouter({
    mode: 'history',
    routes: [
      { path: '/', component: () => import('../pages/Home.vue') },
      { path: '/admin/attendees', component: () => import('../pages/admin/attendees/list/Page.vue') },
    ],
  });
}
