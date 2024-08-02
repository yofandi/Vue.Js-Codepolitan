<template>
  <div>
    <a href="/">Home</a>
    <a href="/about">About</a>
    |
    <RouterLink to="/">Home</RouterLink>
    <RouterLink to="/about">About</RouterLink>
  </div>
</template>
<script setup>
import { RouterLink } from "vue-router";
</script>
<style scoped>
div {
  display: flex;
  gap: 10px;
}
</style>
