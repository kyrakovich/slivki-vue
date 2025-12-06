
<template>
    <p style="text-align: center;">Меню</p>
    <v-container class="Menu-conteiner">
        <v-row class="jjjj">
            <CoffeComponent :name="cofee.name" :description="cofee.description" :image="cofee.image"
                :price="cofee.price" :key="cofee.name" v-for="cofee in coffees" />
        </v-row>
    </v-container>
</template>

<script setup lang="ts">
    import CoffeComponent from '@/components/CoffeComponent.vue'

    const coffees = [
    {
        name: "Медовый раф",
        description: "Нежность мёда и сливок в объятиях экспрессо",
        price: "1080",
        image: "q"

    },
    {
        name: "Уютное кофе",
        description: "Идеальный баланс кофе и шелковой молочной пенки.",
        price: "1080",
        image: "w"
    },
    {
        name: "Плед и латте",
        description: "Тот самый латте, с которым так приятно укутаться в плед.",
        price: "1080",
        image: "e"
    },
    {
        name: "Сердце сливок",
        description: "Классический экспрессо с нежными сердечком из взбитых сливок.",
        price: "1000",
        image: "r"
    },
    {
        name: "Медовый раф",
        description: "Нежность мёда и сливок в объятиях экспрессо",
        price: "1080",
        image: "q"

    },
    {
        name: "Уютное кофе",
        description: "Идеальный баланс кофе и шелковой молочной пенки.",
        price: "1080",
        image: "w"
    },
    {
        name: "Плед и латте",
        description: "Тот самый латте, с которым так приятно укутаться в плед.",
        price: "1080",
        image: "e"
    },
    {
        name: "Сердце сливок",
        description: "Классический экспрессо с нежными сердечком из взбитых сливок.",
        price: "1000",
        image: "r"
    },
    {
        name: "Медовый раф",
        description: "Нежность мёда и сливок в объятиях экспрессо",
        price: "1080",
        image: "q"

    },
    {
        name: "Уютное кофе",
        description: "Идеальный баланс кофе и шелковой молочной пенки.",
        price: "1080",
        image: "w"
    },
    {
        name: "Плед и латте",
        description: "Тот самый латте, с которым так приятно укутаться в плед.",
        price: "1080",
        image: "e"
    },
    {
        name: "Сердце сливок",
        description: "Классический экспрессо с нежными сердечком из взбитых сливок.",
        price: "1000",
        image: "r"
    },
]
</script>

<style scoped>
    .jjjj {
        text-align: center;
        display: flex;
        justify-content: space-between;
        align-items: center;
        max-width: 1300px;
        min-width: 1300px;
    }

    .Menu-conteiner {
        min-width: 1400px;
        justify-items: center;
    }
</style>