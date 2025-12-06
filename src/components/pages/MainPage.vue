<template>
    <v-container class="image-list">
        <v-container class="first-image">
            <p class="sl">СЛИВКИ</p>
            <p class="sl without-obv">СЛИВКИ</p>
            <p class="sl">СЛИВКИ</p>
            <p class="sl without-obv">СЛИВКИ</p>
            <p class="sl">СЛИВКИ</p>
            <v-container class="absolute-image"></v-container>
        </v-container>
        <v-container class="second-image">

        </v-container>
    </v-container>
    
    <textC name="" />

</template>

<script setup lang="ts">



</script>


<style scoped>
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
    max-height: 700px;
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
    max-width: 1375px;
    min-width: 1375px;
}

body {
    background-color: #fffbf3;
    justify-items: center;
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
    position: relative;
    max-height: 550px;
    max-width: 500px !important;
    /* background-color: #de8526; */
    aspect-ratio: 1/1;
    background-image: url(@/assets/image/кофе.png);
    background-size: 550px;
    top: -600px;
    left: 0vw;
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
