<template>
  <div id="app">
    <v-app>
      <v-toolbar color="primary" dark app>
        <v-toolbar-title>Basic Parcel + Vue Setup</v-toolbar-title>
      </v-toolbar>
      <v-content>
        <v-container>
          <router-view></router-view>
        </v-container>
      </v-content>
    </v-app>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App!'
    }
  }
}
</script>

<style lang="css">
  /* can be css/less/sass */
</style>