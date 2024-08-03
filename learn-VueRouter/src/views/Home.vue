<template>
  <main>Home</main>
  <div class="products">
    <RouterLink v-for="product in products" :key="product.id" :to="`/products/${product.id}`">
      {{ product.name }} 
    </RouterLink>
  </div>
</template>

<script setup>
import products from "../data/products.json";
import { RouterLink } from 'vue-router';
</script>

<style scoped>
.products{
  display: flex;
  gap: 1rem;
  padding: 1rem;
  flex-wrap: wrap;
}
</style>