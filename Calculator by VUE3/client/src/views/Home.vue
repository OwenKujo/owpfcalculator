<template>
  <WhoAreYou name="Ploy"/>
  <v-btn to="/about">
        Go to about page.
    </v-btn>
</template>

 

<script>
import WhoAreYou from '@/components/WhoAreYou.vue'

export default {
  name: 'Home',

  components: {
    WhoAreYou,
  },
}
</script>