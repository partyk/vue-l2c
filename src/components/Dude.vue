<template>
    <li
            :title="title"
            class="list-group-item"
    >
        {{ name }}
    </li>
</template>

<script>
export default {
    data: function () {
        return {
            title: ''
        };
    },
    props: {
        name
    }
};
</script>