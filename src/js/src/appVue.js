import Vue from 'vue/dist/vue.esm';
// root components
import App from '../../components/app/App';

global.appVue = new Vue({
    el: '#app',
    render: h => h(App)
});