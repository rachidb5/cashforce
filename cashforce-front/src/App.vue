<script setup>
import NavigationMenu from "./components/NavigationMenu.vue";
import Main from "./components/Main.vue";
</script>

<template>
      <v-row class="ma-12 pa-12">
        <v-card :color="'black'">
          <v-layout>
            <NavigationMenu />
          </v-layout>
        </v-card>
        <span>asdasdas</span>
      </v-row>
</template>

<style>
@import url("https://fonts.googleapis.com/css2?family=DM+Sans:ital,wght@0,400;0,500;0,700;1,400;1,500;1,700&display=swap");
main {
  width: fit-content;
  background-color: #fff;
}
</style>
