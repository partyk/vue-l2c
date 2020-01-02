<template>
    <div class="title is-size-1 has-text-weight-bold">
        <span v-show="score >= 10">🎉</span>
        {{ score }}
        <span v-show="score >= 10">🎉</span>
    </div>
</template>
<script src="./score.js"></script>