<template>
    <div class="card product" :class="classObject">
        <main-image v-bind:image="image" v-on:randomimage="randomImage"/>
        <div class="card-content has-text-centered">
            <div class="content">
                <score v-bind:score="score"/>
                <p>
                    {{ fullName }}
                </p>
                <ascii-dudes v-bind:score="score"/>
            </div>
        </div>
        <buttons
                v-bind:score="score"
                v-on:scoreup="++score"
                v-on:scoredown="--score"
                v-on:clickpoo="clickPoo"
        />
    </div>
</template>
<script src="./card.js"></script>