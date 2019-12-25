<template>
    <div>
        <div class="progress mb-3">
            <div class="progress-bar progress-bar-striped progress-bar-animated bg-success"
                 role="progressbar"
                 :style="{ width: value + '%' }"
                 :aria-valuenow="value"
                 aria-valuemin="0"
                 aria-valuemax="100"
                >
                {{ value }}%
            </div>
        </div>
        <div class="form-group mb-3">
            <label for="formControlRange">Example Range input</label>
            <input type="range" class="form-control-range" id="formControlRange" min="0" max="100" v-model.number="value">
        </div>
        <button v-on:click="raiseBar" class="btn btn-secondary mb-10">
            Progress bar up
        </button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            value: 20
        };
    },
    methods: {
        raiseBar() {
            if (this.value < 100) {
                this.value += 1;
            } else {
                this.value = 20;
            }
        }
    }
};
</script>

<style lang="scss" scoped>
.progress {
    .progress-bar {
        font-weight: bold;
    }
}
</style>