<template>
    <v-app toolbar>
        <v-toolbar class="primary" dark>
            <v-toolbar-title>SITCON x HK 2017 Booth Game</v-toolbar-title>
        </v-toolbar>
        <main>
            <v-container fluid>
                <router-view></router-view>
            </v-container>
        </main>
    </v-app>
</template>

<style lang="stylus">
    @import "../../node_modules/vuetify/src/stylus/settings/_colors.styl"
    $theme := {
        primary: #9D1F24
        accent: $cyan.lighten-2
        secondary: $indigo.darken-2
        info: $blue.base
        warning: $amber.base
        error: $red.base
        success: $green.base
    }
    @import "../../node_modules/vuetify/src/stylus/main.styl"
    ul.breadcrumbs
        justify-content: left
        border-bottom: 1px solid $grey.lighten-3
    main
        min-height 80vh
        background-color white
        > .container
            min-height: 0 !important
    .breadcrumbs-link
        cursor pointer
</style>

<script>
    export default {
      metaInfo: {
        title: 'SITCON x HK 2017 Booth Game',
        meta: [
          { charset: 'utf-8' },
          { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        ],
        link: [
          { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons' },
        ],
      },
    };
</script>
