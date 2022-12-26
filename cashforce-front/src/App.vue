<script setup>
import NavigationMenu from "./components/NavigationMenu.vue";
</script>

<template>
  <v-card :color="'black'">
    <v-layout>
      <NavigationMenu />
    </v-layout>
  </v-card>
  <main></main>
</template>

<style>
  @import url("https://fonts.googleapis.com/css2?family=DM+Sans:ital,wght@0,400;0,500;0,700;1,400;1,500;1,700&display=swap");
  main{
    width: fit-content;
    background-color: #fff;
  }
</style>
