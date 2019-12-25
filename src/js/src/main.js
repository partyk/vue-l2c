import 'core-js/stable';
import 'regenerator-runtime/runtime';
import Vue from 'vue/dist/vue.esm';
import Dude from '../../components/Dude';
import Listgroupitem from '../../components/Listgroupitem';
import ProgressBar from '../../components/ProgressBar';

new Vue({
    el: '#app',
    components: {
        Dude,
        Listgroupitem,
        ProgressBar
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
