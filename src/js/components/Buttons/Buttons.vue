<template>
    <footer class="card-footer">
        <a class="card-footer-item" v-on:click="$emit('scoreup')">more 👍</a>
        <a class="card-footer-item" v-on:click="$emit('scoredown')">less 👎</a>
        <a class="card-footer-item" v-bind:disabled="score < 1" v-on:click="$emit('clickpoo')">Show POO</a>
    </footer>
</template>
<script src="./buttons.js"></script>