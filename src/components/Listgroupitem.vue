<template>
    <li v-bind:title="title" class="list-group-item">
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