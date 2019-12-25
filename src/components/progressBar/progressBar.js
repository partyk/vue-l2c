export default {
    data() {
        return {
            value: 20
        };
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