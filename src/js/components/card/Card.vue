<template>
    <div class="card product" :class="classObject">
        <div class="card-image">
            <figure class="image">
                <img v-bind:src="image" alt="Placeholder image" v-on:click="randomImage">
            </figure>
        </div>
        <div class="card-content has-text-centered">
            <div class="content">
                <div class="title is-size-1 has-text-weight-bold">
                    <span v-show="score >= 10">🎉</span>
                    {{ score }}
                    <span v-show="score >= 10">🎉</span>
                </div>
                <p>
                    {{ fullName }}
                </p>
                <div v-if="score >= 5" class="has-text-grey">
                    ╮ (. ❛ ᴗ ❛.) ╭
                </div>
                <div v-else-if="score < 5 && score > 0" class="has-text-grey">
                    ༼ つ ◕_◕ ༽つ
                </div>
                <div v-else class="has-text-grey">
                    (・_・ヾ
                </div>
            </div>
        </div>
        <footer class="card-footer">
            <a class="card-footer-item" v-on:click="score++">more 👍</a>
            <a class="card-footer-item" v-on:click="--score">less 👎</a>
            <a class="card-footer-item" v-bind:disabled="score < 1" v-on:click="clickPoo">Show POO</a>
        </footer>
    </div>
</template>
<script src="./card.js"></script>