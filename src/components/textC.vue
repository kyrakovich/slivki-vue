<script setup lang="ts">
const props = defineProps({
    text: {
        type: String,
        default: "Привет"
    }
})
</script>



<template>

    <v-container class="card">
        <p>{{ props.text }}</p>
    </v-container>




</template>

<style>
.card {
    padding: 10px 30px;
    background-color: #de8526;
    width: fit-content;
    border-radius: 20px;
    font-size: 30px;
}
</style>