export default {
    computed: {
        randomLeftPos() {
            return Math.floor(Math.random() * window.innerWidth) + 'px';
        },
        randomWidth() {
            return Math.floor(Math.random() * 400) + 50 + 'px';
        }
    }
};