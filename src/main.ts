import Vue from "vue";
import App from './app/App.vue';
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

// Import Bootstrap an BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import './styles/app.scss';

export class AppModule {

  constructor() {
    this.bootstrap();
  }

  private async bootstrap(): Promise<Vue> {

    // Make BootstrapVue available throughout your project
    Vue.use(BootstrapVue)
    // Optionally install the BootstrapVue icon components plugin
    Vue.use(IconsPlugin)

    const options = {
      el: '#app',
      render: create => create(App)
    };

    return new Vue(options);
  }
}

new AppModule();
