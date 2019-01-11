
import Vue from 'vue';
import App from './components/App.vue';
import { square } from './localFunctions';

document.getElementById('test').innerHTML = square(10);

// import { Button, Select } from 'element-ui';
import { Button, Aaa, Aab } from 'element-ui';
// import { Button, Select, Aaa } from 'element-ui';
// import { aaa, aab } from 'element-ui';

Vue.component(Button.name, Button);
// Vue.component(Select.name, Select);

// Vue.use(Aaa);
Vue.component('Badge', Aaa);
Vue.component('ExternalLink', Aab);

// import '../node_modules/phila-standards/dist/css/phila-standards.min.css';

const vm = new Vue({
  el: '#vue-app',
  render: h => h(App)
  // store
});
