<template>
  <v-app>
    <v-main>
      <div>
        <v-app-bar color="cyan" prominent>
          <v-toolbar-title>
            <v-btn prepend-icon="mdi-vuetify text-white" @click="clickMeDialog = true"> Welcome to calculator using Vue3 + Vuetify3 ! </v-btn>
          </v-toolbar-title>
          <v-spacer>
          </v-spacer>
        </v-app-bar>
      </div>

      <v-dialog v-model="clickMeDialog">
        <v-alert closable icon="mdi-alert" title="Hey That HURTT!" text="Don't click me like that!" color="red"></v-alert>
      </v-dialog>

      <router-view :key="$route.path" />
    </v-main>
  </v-app>
</template>

<script>
// Components
// import A from '@/components/x'

export default {
  name: 'App',

  components: {
  },

  data: () => ({
    clickMeDialog: null,
  }),
}
</script>
