<template>
    <v-app>
    <v-navigation-drawer app v-model="drawer"></v-navigation-drawer>
    <v-app-bar app dark color="primary">
        <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
        <v-spacer></v-spacer>
        <v-toolbar-items class="hidden-sm-and-down">
            <v-btn text><v-icon left>mdi-cake-variant</v-icon>Link One</v-btn>
            <v-btn text>Link Two</v-btn>
            <v-btn text>Link Three</v-btn>
        </v-toolbar-items>
    </v-app-bar>
    <v-main>
        <router-view></router-view>
    </v-main>
    </v-app>    
</template>

<script>
export default {
 data() {
     return {
         drawer: false
     }
 }
}
</script>