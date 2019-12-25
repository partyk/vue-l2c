import Vue from 'vue/dist/vue.esm';
// root components
import App from '../../app/App';

global.appVue = new Vue({
    el: '#app',
    render: h => h(App)
});