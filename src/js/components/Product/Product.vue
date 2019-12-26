<template>
    <div class="card product">
        <div class="card-image">
            <figure class="image">
                <img v-bind:src="imageSrc" alt="Placeholder image" v-on:click="changeImage">
            </figure>
        </div>
        <div class="card-content has-text-centered">
            <div class="content">
                <div class="title is-size-2 has-text-weight-bold">
                    {{ name }}
                </div>
                <div class="notification is-warning" v-if="inStock < 3">
                    Zostávajú posledné kusy, kupuj rýchlo!
                </div>
            </div>
        </div>
        <footer class="card-footer">
            <div class="card-footer-item" :class="{'has-background-warning': isAction}">
                <span v-if="isAction">AKCE</span>
            </div>
            <div class="card-footer-item">
                Skladem: {{ inStock }}
            </div>
            <div class="card-footer-item">
                <a class="button is-primary" v-on:click="remove" v-bind:disabled="inStock === maxStock">
                    Odebrat
                </a>
                <a class="button is-danger" v-on:click="add" v-bind:disabled="inStock === 0">
                    Přidat
                </a>
            </div>
        </footer>
    </div>
</template>
<script src="./product.js"></script>