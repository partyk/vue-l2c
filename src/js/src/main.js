import 'core-js/stable';
import 'regenerator-runtime/runtime';
import Vue from 'vue/dist/vue.esm';
import Dude from '../../components/Dude';

new Vue({
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
