<template>
    <li v-bind:title="title" class="list-group-item">
        {{ name }}
    </li>
</template>

<script>
export default {
    name: 'Dude',
    props: {
        name: {
            type: String,
            required: true
        }
    },
    data() {
        return {
            title: 'aaa'
        };
    }
};
</script>