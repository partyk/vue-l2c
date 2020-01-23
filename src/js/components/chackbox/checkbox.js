export default {
    model: {
        prop: 'checked',
        event: 'change'
    },
    props: {
        checked: Boolean
    },
    methods: {
        onChange: function (e) {
            console.log(e);
            this.$emit('change', e.target.checked);
        }
    }
};