<template>
    <h1> This is about page. </h1>
    <v-btn to="/">
        Go to home page.
    </v-btn>
</template>

<script>
import WhoAreYou from '@/components/WhoAreYou.vue'

export default {
    name: 'About',

    components: {
        WhoAreYou,
    },
}
</script>