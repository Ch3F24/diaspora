window.vue = require('vue');
const app = vue.createApp({});
import SvgVue from 'svg-vue3';
app.use(SvgVue);
app.component('slider', require('./components/slider.vue').default);
app.mount('#app');
