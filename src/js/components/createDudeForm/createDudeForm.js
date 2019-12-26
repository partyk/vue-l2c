export default {
    data() {
        return {
            newDude: ''
        };
    },
    methods: {
        addNewDude() {
            // check if input an empty return
            if (!this.$refs.inputName.value) {
                return;
            }
            // call parent event add-dude
            this.$emit('add-dude', this.newDude);
            // cleared input
            this.$refs.inputName.value = '';
            this.newDude = '';
            // add focus
            this.$refs.inputName.focus();
        }
    }
};