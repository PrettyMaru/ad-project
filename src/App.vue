<template>
    <v-app>
    <v-navigation-drawer app v-model="drawer">
    <v-list-item>
        <v-list-item-content>
            <v-list-item-title class="title">
                КИПУ
            </v-list-item-title>
                <v-list-item-subtitle>
                    Учебный проект
                </v-list-item-subtitle>
        </v-list-item-content>
    </v-list-item>

    <v-divider></v-divider>

    <v-list dense>
        <v-list-item-group color="primary">
            <v-list-item>
                <v-list-item-icon>
                    <v-icon>mdi-cake-variant</v-icon>
                </v-list-item-icon>
                <v-list-item-content>
                    <v-list-item-title>Link One</v-list-item-title>
                </v-list-item-content>
            </v-list-item>
        </v-list-item-group>
        <v-list-item
            v-for="link in links"
            :key="link.title"
            >
                <v-list-item-icon>
                    <v-icon>{{ link.icon }}</v-icon>
                </v-list-item-icon>
                <v-list-item-content>
                    <v-list-item-title>{{ link.title }}</v-list-item-title>
                </v-list-item-content>
            </v-list-item>
    </v-list>
    </v-navigation-drawer>
    
    <v-app-bar app dark color="primary">
        <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
        <v-spacer></v-spacer>
        <v-toolbar-items class="hidden-sm-and-down">
            <v-btn
            v-for="link in links"
            :key="link.title"
            text><v-icon left>{{ link.icon }}</v-icon>{{ link.title }}</v-btn>
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
         drawer: false,
         links: [
             {title:"Login", icon:"mdi-lock", url:"/Login"},
             {title:"Registration", icon:"mdi-face", url:"/Registration"},
                {title:"Orders", icon:"mdi-bookmark-multiple-outline",
                url:"/Orders"},
            {title:"New ad", icon:"mdi-note-plus-outline", url:"/New"},
            {title:"My ads", icon:"mdi-view-list-outline", url:"/list"}
         ]
     }
 }
}
</script>