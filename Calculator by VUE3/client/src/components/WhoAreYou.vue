<template>
    <v-card> My name is {{ name }}. </v-card>
</template>

<script>
export default {

    props: {
        name: {
            type: String,
            require: false,
            default: "Nothing",
        }
    }
}
</script>