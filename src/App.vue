<template>
  <div id="app">
    <v-app>
      <v-toolbar color="primary" dark app>
        <v-toolbar-title>{{title}}</v-toolbar-title>
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
  data: () => ({
    title: 'Basic Vue + Parcel Setup'
  })
}
</script>

<style lang="css">
  /* can be css/less/sass */
</style>