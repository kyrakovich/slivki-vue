<template>
    <v-col cols="3" v-for="i in props">
        <v-container class="photo" :class="i.image">

        </v-container>
        <v-col>
            <h1>{{ i.name }}</h1>
            <v-row>
                <p>{{ i.desription }}</p>
                <p>{{ i.price }}</p>
            </v-row>
        </v-col>
    </v-col>
</template>

<script setup lang="ts">


const props = defineProps({
        name: {
            type: String,
            default: "Кофе"
        },
        description: {
            type: String,
            default: "Описание кофе"
        },
        image: {
            type: String,
            default:"q"
        },
        price: {
            type: String,
            default: "1"
        }
})

</script>

<style scoped>

.photo {
    min-width: 250px;
    text-align: center;
    border-radius: 20px;
    background-size: cover;
    aspect-ratio: 2/3;
}

.q {
    background-image: url(@/assets/image/медовый\ раф.png);
}

.w {
    background-image: url(@/assets/image/уютное\ утро.png);
}

.e {
    background-image: url(@/assets/image/Плед\ и\ латте.png);
}

.r {
    background-image: url(@/assets/image/Сердце\ сливок.png);
}
</style>
