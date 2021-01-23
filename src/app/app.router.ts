import VueRouter from 'vue-router';
import Vue from "vue";
import Home from '../views/Home.vue'

Vue.use(VueRouter);

export function router() {
  return new VueRouter({
    mode: 'history',
    routes: [
      {
        path: '/',
        name: 'Home',
        component: Home,
      },
    ]
  });
}
