
import Vue from 'vue';
// import Badge from '../node_modules/rollup-test/src/components';
import App from './components/App.vue';

const vm = new Vue({
  el: '#vue-app',
  render: h => h(App)
});
