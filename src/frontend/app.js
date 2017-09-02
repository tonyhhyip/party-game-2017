import Vue from 'vue';
import Vuetify from 'vuetify';
import { sync } from 'vuex-router-sync';
import App from './App.vue';
import createRouter from './router';
import createStore from './store';
import createApollo from './apollo';

Vue.use(Vuetify);

export default function (isServer = false) {
  const router = createRouter();
  const store = createStore();

  sync(store, router);

  const options = {
    router,
    store,
    render: h => h(App),
  };

  if (!isServer) {
    options.apolloProvider = createApollo();
  }

  const app = new Vue(options);
  return { app, router, store };
}
