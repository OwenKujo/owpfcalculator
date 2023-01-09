<template>
  <v-app>
    <v-main>
      
      <!--  -->
      <v-card>
        This is Navigation Bar
      </v-card>
      <!--  -->

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
}
</script>
