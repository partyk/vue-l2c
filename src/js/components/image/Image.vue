<template>
    <div class="card-image">
        <figure class="image">
            <img v-bind:src="image" alt="Placeholder image" v-on:click="$emit('randomimage')">
        </figure>
    </div>
</template>

<script src="./image.js"></script>