<template>
    <div>
        <input
                type="checkbox"
                v-bind:checked="checked"
                v-on:change="onChange"
        >
    </div>
</template>
<script src="./checkbox.js"></script>