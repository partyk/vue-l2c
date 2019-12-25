<template>
    <aside>
        <form class="add-new mb-3" v-on:submit.prevent="addNewDude">
            <div class="form-group">
                <input type="text" ref="inputName" class="form-control" v-model="newDude">
            </div>
            <button type="submit" class="btn btn-primary">Odeslat</button>
        </form>
        <div class="alert alert-primary text-center" role="alert" v-show="newDude">
            {{ newDude }}
        </div>
    </aside>
</template>
<script src="./createDudeForm.js"></script>