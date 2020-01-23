export default {
    props: [
        'num'
    ],
    data() {
        return {
            value: this.num
        };
    },
    watch: {
        num: function () {
            this.value = this.num;
        }
    },
    methods: {
        raiseBar() {
            if (this.value < 100) {
                this.value += 1;
            } else {
                this.value = 20;
            }
        }
    }
};