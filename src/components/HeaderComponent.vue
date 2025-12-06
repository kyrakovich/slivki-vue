<template>
    <v-container class="header">
        <v-container class="info">
            <p class="cursor" @click="GoToMenuPage">меню</p>
            <p class="cursor" @click="GoToAboutUsPage">о нас</p>
        </v-container>
        <v-container>
            <h1 class="header-title cursor" @click="GoToHome">Сливки</h1>
        </v-container>
        <v-container class="infoo mr-10">
            <v-container class="icon">
                <img src="@/assets/image/user-circle-single--circle-geometric-human-person-single-user.png" alt="">
            </v-container>
            <v-container class="icon">
                <img class="cursor" @click="GoToNavigation" src="@/assets/image/location-pin-3--navigation-map-maps-pin-gps-location.png" alt="">
            </v-container>
        </v-container>
    </v-container>
</template>

<script setup lang="ts">
import router from '@/router';


function GoToMenuPage(){
    router.push('/menu')
}

function GoToAboutUsPage(){
    router.push('/AboutUs')
}

function GoToHome(){
    router.push('/')
}

function GoToNavigation(){
    router.push('/Navigation')
}

</script>

<style scoped>
.header-title {
    font-family: lobelia;
    text-align: center;
}
h1{
    width: fit-content;
    justify-self: center;
}


.wew{
    justify-self: center;
    justify-content: center;
    justify-items: ;
}

.header {
    display: flex;
    justify-content: space-between;
    background-color: #FFF3DB;
    border-radius: 20px;
    min-width: 1280px;
    padding: 0px 20px;
}

.info {
    display: flex;
    justify-content: space-between;
    max-width: 120px;
    text-align: center;
    align-items: center;
}

.infoo {
    display: flex;
    justify-content: space-around;
    width: 75px;
    text-align: center;
    align-items: center;

}

.cursor{
    cursor: pointer;
}
</style>