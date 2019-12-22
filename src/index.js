import '@babel/polyfill';
import Vue from 'vue';
import Dude from './components/Dude.vue';

global.Vue = Vue;

/* Vue.component('listgroupitem', {
    props: [
        'title', 'name'
    ],
    template: `
        <li v-bind:title="title" class="list-group-item">
            {{name}}
        </li>
    `,
    data() {
        return {
            dudeName: 'Jake the dog'
        };
    }
}); */

global.app = new Vue({
    el: '#app',
    components: {
        Dude
    },
    data: {
        newDude: '',
        characters: [
            'loreipsum 1',
            'loreipsum 2',
            'loreipsum 3'
        ]
    }
});