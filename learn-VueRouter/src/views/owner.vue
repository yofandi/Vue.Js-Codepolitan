<template>
  <div v-if="owner">
    <h1>Owner</h1>
    <p>{{ owner.name }}</p>
    <p>{{ owner.email }}</p>
  </div>
  <div v-else>
    <h1>Owner not found</h1>
  </div>
</template>

<script setup>
import products from "../data/products.json";
import { useRoute } from "vue-router";

const route = useRoute();
const { owner } = products.find(
  (product) => product.id === parseInt(route.params.id)
);
</script>

<style scoped></style>
