<script setup lang="ts">
import { ref } from 'vue'
import HeaderComponent from '@/components/HeaderComponent.vue'
import CoffeComponent from './components/CoffeComponent.vue'

// const nunsss = 167
// const qwe = 300
// const string = "123"
// const object = {
//     name: "sdsd",
//     price: 111
// }
// const array = [
//     "string"
// ]

// const result = ref()

// function click() {
//     result.value == nunsss + qwe
// }

const coffees = ref<Object[]>([
    {
        name:"Медовый раф",
        desription:"Нежность мёда и сливок в объятиях экспрессо",
        price:"1080",
        image:"q"
        
    },
    {
        name:"Уютное кофе",
        desription:"Идеальный баланс кофе и шелковой молочной пенки.",
        price:"1080",
        image:"w"
    },
    {
        name:"Плед и латте",
        desription:"Тот самый латте, с которым так приятно укутаться в плед.",
        price:"1080",
        image:"e"
    },
    {
        name:"Сердце сливок",
        desription:"Классический экспрессо с нежными сердечком из взбитых сливок.",
        price:"1000",
        image:"r"
    },
    {
        name:"Медовый раф",
        desription:"Нежность мёда и сливок в объятиях экспрессо",
        price:"1080",
        image:"q"
        
    },
    {
        name:"Уютное кофе",
        desription:"Идеальный баланс кофе и шелковой молочной пенки.",
        price:"1080",
        image:"w"
    },
    {
        name:"Плед и латте",
        desription:"Тот самый латте, с которым так приятно укутаться в плед.",
        price:"1080",
        image:"e"
    },
    {
        name:"Сердце сливок",
        desription:"Классический экспрессо с нежными сердечком из взбитых сливок.",
        price:"1000",
        image:"r"
    },
    {
        name:"Медовый раф",
        desription:"Нежность мёда и сливок в объятиях экспрессо",
        price:"1080",
        image:"q"
        
    },
    {
        name:"Уютное кофе",
        desription:"Идеальный баланс кофе и шелковой молочной пенки.",
        price:"1080",
        image:"w"
    },
    {
        name:"Плед и латте",
        desription:"Тот самый латте, с которым так приятно укутаться в плед.",
        price:"1080",
        image:"e"
    },
    {
        name:"Сердце сливок",
        desription:"Классический экспрессо с нежными сердечком из взбитых сливок.",
        price:"1000",
        image:"r"
    },
]) 



</script>




<template>
    <HeaderComponent />

    <v-container class="image-list">
        <v-container class="first-image">
            <v-container class="absolute-image"></v-container>
            <p class="sl">СЛИВКИ</p>
            <p class="sl without-obv">СЛИВКИ</p>
            <p class="sl">СЛИВКИ</p>
            <p class="sl without-obv">СЛИВКИ</p>
            <p class="sl">СЛИВКИ</p>

        </v-container>
        <v-container class="second-image">

        </v-container>
    </v-container>
    <h1>Меню</h1>
    <v-container class="Menu-conteiner">
        <v-row class="jjjj">
            <CoffeComponent :items=coffees />
        </v-row>
    </v-container>
    <v-row class="justify-center text" style="text-align: center;">
        <v-col cols="1">1</v-col>
        <v-col cols="1">2</v-col>
        <v-col cols="1">3</v-col>
        <v-col cols="3">4</v-col>
        <v-col cols="6">5</v-col>
    </v-row>
</template>



<style>
.text {
    font-size: 30px;
}

@font-face {
    font-family: lobelia;
    src: url(@/assets/fonts/Lobelia.ttf);
}



.first-image {
    background-color: #DE8626;
    border-radius: 20px;
    margin-right: 40px;
    margin: 30px;
}

.second-image {
    border-radius: 20px;
    background-image: url(@/assets/image/image\ 151650.png);
    background-size: cover;
    margin: 30px;
}

.image-list {
    display: flex;
    justify-content: center;
}

body {
    background-color: #fffbf3;
    justify-items: center;
}

.jjjj {
    text-align: center;
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1300px;
    min-width: 1300px;

}

h1 {
    text-align: center;
    margin: 0;
}

.sl {
    font-family: lobelia;
    margin: 0px;
    font-size: 120px;
    line-height: 130px;
    text-align: center;
    color: #FFFBF3;
}

.without-obv {
    color: #de8526;
    text-shadow: 2px 0 #FFFBF3, 0px 2px #FFF3DB, -2px 0px #FFFBF3, 0px -2px #FFFBF3;
}

.absolute-image {
    position: absolute;
    max-height: 550px;
    max-width: 500px !important;
    /* background-color: #de8526; */
    aspect-ratio: 1/1;
    background-image: url(@/assets/image/кофе.png);
    background-size: 550px;
    top: 180px;
    left: 23vw;
}

.icon-arrow {
    background-image: url(@/assets/image/кнопка.png);
    max-width: 40px;
    aspect-ratio: 1/1;
    background-size: cover;
}

.Menu-conteiner {
    min-width: 1400px;
    justify-items: center;
}
</style>
