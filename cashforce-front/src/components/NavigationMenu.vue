<template>
        <v-navigation-drawer
        >
        <v-container>
            <v-row>
                <v-col cols="1"></v-col>
                <v-col cols="8">
                    <img src="../assets/Logo.png" />
                </v-col>
            </v-row>
        </v-container>
  
          <v-divider></v-divider>
  
          <v-list density="compact" nav>
            <v-list-item prepend-icon="mdi-folder" title="My Files" value="myfiles"></v-list-item>
            <v-list-item prepend-icon="mdi-account-multiple" title="Shared with me" value="shared"></v-list-item>
            <v-list-item prepend-icon="mdi-star" title="Starred" value="starred"></v-list-item>
          </v-list>
        </v-navigation-drawer>
  </template>
  <script scoped>
</script>