<template>
    <div class="container">
        <div class="row">
            <div class="col">
                <ul class="list-group mb-3">
                    <dude
                            v-for="(item, index) in characters"
                            v-bind:title="`Hello` + index"
                            v-bind:name="item"
                            v-bind:key="index"
                    />
                </ul>
                <create-dude-form
                        v-on:add-dude="characters.push($event)"
                />
                <Checkbox v-model="lovingVue" />
                {{lovingVue}}
                <progress-bar v-bind:num="num" />
                <input v-model="num">
            </div>
        </div>
    </div>
</template>
<script src="./test.js"></script>