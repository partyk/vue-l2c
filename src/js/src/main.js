import 'core-js/stable';
import 'regenerator-runtime/runtime';
import Vue from 'vue/dist/vue.esm';
import Card from '../components/card/Card';
import Poop from '../components/poop/Poop';

new Vue({
    el: '#app',
    components: {
        Card,
        Poop
    },
    data: {
        poops: [],
        poopsCount: 0,
        poopsActive: 0,
        poopsMax: 5
    },
    methods: {
        createPoop() {
            if (this.poopsActive >= this.poopsMax) {
                return;
            }
            this.poops.push(this.poopsCount);
            this.poopsCount++;
        },
        animateStart(el) {
            this.poopsActive++;
        },
        animateStop(el) {
            el.remove();
            this.poopsActive--;
        }
    },
    watch: {
        poopsActive(newVal, oldVal) {
            console.log(newVal, oldVal);
        }
    }
});