<template>
  <v-avatar size="200px" tile>
    <v-img :src="logo"></v-img>
  </v-avatar>
</template>

<script>
  import logo from '../assets/parcel.png';

  export default {
    computed: {
      logo () {
        return logo;
      }
    }
  }
</script>