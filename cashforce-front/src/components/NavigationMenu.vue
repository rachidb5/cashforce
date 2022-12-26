<template>
  <v-navigation-drawer dark permanent>
    <v-container>
      <v-row>
        <v-col cols="1"></v-col>
        <v-col cols="8">
          <img src="../assets/Logo.png" />
        </v-col>
      </v-row>
    </v-container>
    <v-spacer></v-spacer>

    <v-list density="compact" nav>
      <v-list-item  value="myfiles">
        <v-row align-content="center">
          <v-col cols="3">
            <img src="../assets/handshake.png" />
          </v-col>
          <v-col cols="6">
            <span>Notas fiscais</span>
          </v-col>
        </v-row>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>
<script setup>
  import DocumentationIcon from "./icons/IconDocumentation.vue";
</script>
<style>
.v-list-item {
  border-left: 4px solid #00ad8c !important;
  color: #00ad8c !important;
}
.v-navigation-drawer {
  background-color: #fbfdfe !important;
  border: none !important;
}
.v-col-6{
  padding-top: 8% !important;
}
</style>
