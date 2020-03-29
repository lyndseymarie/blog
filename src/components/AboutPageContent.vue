<template>
    <v-card flat tile>
        <v-container>
            <v-card-text>{{ aboutText }}</v-card-text>
        </v-container>
    </v-card>
</template>

<script>
  export default {
    name: 'about-page-content',
    data: () => ({
        aboutText: 'Here I write all about myself. Here I write all about myself. Here I write all about myself. Here I write all about myself. Here I write all about myself. Here I write all about myself. Here I write all about myself. Here I write all about myself. Here I write all about myself.'
    }),

  }
</script>

<style scoped></style>