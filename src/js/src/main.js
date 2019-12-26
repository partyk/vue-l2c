import 'core-js/stable';
import 'regenerator-runtime/runtime';
import Vue from 'vue/dist/vue.esm';
import Card from '../components/card/Card';

new Vue({
    el: '#app',
    components: {
        Card
    }
});