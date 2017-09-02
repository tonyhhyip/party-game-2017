<template>
    <v-app>
        <router-view></router-view>
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
</style>