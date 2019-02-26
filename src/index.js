import '@babel/polyfill';
import Vue from 'vue';

global.app = new Vue({
    el: '#app',
    data: {
        list: [],
        inputText: null,
        submittedText: null
    },
    methods: {
        submitForm() {
            if (!this.inputText || this.inputText.length === 0) {
                return;
            }
            this.submittedText = this.inputText;
            this.list.unshift(this.inputText);
            this.resetForm();
        },
        resetForm() {
            this.inputText = null;
        },
        removeItem(index) {
            this.submittedText = null;
            this.list.splice(index, 1);
        }
    }
});