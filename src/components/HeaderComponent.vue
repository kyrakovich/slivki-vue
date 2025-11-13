<template>
    <v-container class="header">
        <v-container class="info">
            <p>меню</p>
            <p>о нас</p>
        </v-container>
        <v-container>
            <h1 class="header-title">Сливки</h1>
        </v-container>
        <v-container class="infoo mr-10">
            <v-container class="icon">
                <img src="@/assets/image/user-circle-single--circle-geometric-human-person-single-user.png" alt="">
            </v-container>
            <v-container class="icon">
                <img src="@/assets/image/location-pin-3--navigation-map-maps-pin-gps-location.png" alt="">
            </v-container>
        </v-container>
    </v-container>
</template>

<style scoped>
.header-title {
    font-family: lobelia;
}

.header {
    display: flex;
    justify-content: space-between;
    background-color: #FFF3DB;
    border-radius: 20px;
    width: 1280px;
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
</style>