<script setup>
import NavigationMenu from "./components/NavigationMenu.vue";
import Table from "./components/Table.vue";

</script>


<template>
  <v-app id="inspire">
    <v-toolbar color="white" flat tile>
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title>Toolbar</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-side-icon
        @click.stop="drawerRight = !drawerRight"
      ></v-toolbar-side-icon>
    </v-toolbar>
    <NavigationMenu />
    <v-main>
        <Table />
    </v-main>
  </v-app>
</template>
<style>
.v-toolbar{
  border-bottom: 1px #DFE2EB solid !important;
}
</style>
<script>
export default {
  data: () => ({
    drawer: null,
    drawerRight: null,
    right: false,
    left: false,
  }),
  props: {
    source: String,
  },
};
</script>
