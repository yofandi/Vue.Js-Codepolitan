<template>
  <Navbar />
  <main>
    <RouterView />
  </main>
</template>

<script setup>
import { RouterView } from "vue-router";
import Navbar from "./components/Nav.vue";
</script>

<style scoped></style>