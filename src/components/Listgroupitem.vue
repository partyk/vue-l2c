<template>
    <li v-bind:title="title" class="list-group-item aaa">
        <slot></slot>
        {{ name }}
    </li>
</template>

<script>
export default {
    props: [
        'name'
    ],
    data() {
        return {
            title: 'test'
        };
    }
};
</script>

<style lang="scss" scoped>
    li {
        font-size: 2em;
        color: #F00;
    }
</style>