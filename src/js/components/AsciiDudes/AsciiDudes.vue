<template>
    <div v-if="score >= 5" class="has-text-grey">
        ╮ (. ❛ ᴗ ❛.) ╭
    </div>
    <div v-else-if="score < 5 && score > 0" class="has-text-grey">
        ༼ つ ◕_◕ ༽つ
    </div>
    <div v-else class="has-text-grey">
        (・_・ヾ
    </div>
</template>
<script src="./asciiDudes.js"></script>