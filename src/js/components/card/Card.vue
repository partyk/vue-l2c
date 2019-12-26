<template>
    <div class="card" :class="classObject">
        <div class="card-image">
            <figure class="image">
                <img v-bind:src="image" alt="Placeholder image" v-on:click="randomImage">
            </figure>
        </div>
        <div class="card-content has-text-centered">
            <div class="content">
                <div class="title is-size-1 has-text-weight-bold">
                    <span v-show="score >= 10">Y</span>
                    {{ score }}
                    <span v-show="score >= 10">Y</span>
                </div>
                <p>
                    {{ fullName }}
                </p>
                <div class="has-text-grey" v-if="score >= 5">
                    ---
                </div>
                <div class="has-text-grey" v-else-if="score < 5 && score > 0">
                    --
                </div>
                <div class="has-text-grey" v-else>
                    -
                </div>
            </div>
        </div>
        <footer class="card-footer">
            <a class="card-footer-item" v-on:click="score++">more</a>
            <a class="card-footer-item" v-on:click="--score">less</a>
            <a class="card-footer-item" v-bind:disabled="score < 1">butt</a>
        </footer>
    </div>
</template>
<script src="./card.js"></script>